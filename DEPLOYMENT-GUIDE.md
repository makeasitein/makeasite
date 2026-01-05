# Complete Deployment Guide: EC2 + Domain Setup

## 🚀 Deploying React/Vite App to AWS EC2 with Custom Domain

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Build Your Application](#step-1-build-your-application)
3. [Step 2: Install Nginx on EC2](#step-2-install-nginx-on-ec2)
4. [Step 3: Configure Nginx](#step-3-configure-nginx)
5. [Step 4: Configure DNS Records](#step-4-configure-dns-records)
6. [Step 5: Install SSL Certificate (HTTPS)](#step-5-install-ssl-certificate-https)
7. [Step 6: Final Verification](#step-6-final-verification)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

✅ AWS EC2 instance running Ubuntu
✅ Domain name (GoDaddy/Hostinger)
✅ SSH access to EC2 instance
✅ Security Group allowing ports: 22 (SSH), 80 (HTTP), 443 (HTTPS)

---

## Step 1: Build Your Application

### On Your Local Machine:

```bash
# Navigate to your project
cd /path/to/Modernminimalisticbusinesscard-main

# Install dependencies (if not already done)
npm install

# Build the production version
npm run build
```

This creates a `dist` folder with optimized files.

### Upload to EC2:

**Option A: Using SCP (Secure Copy)**

```bash
# From your local machine, upload the dist folder
scp -i your-key.pem -r dist/* ubuntu@YOUR_EC2_IP:/home/ubuntu/makeasite/
```

**Option B: Using Git (Recommended)**

```bash
# On EC2
cd ~/makeasite
git pull origin master  # or your branch name
npm install
npm run build
```

---

## Step 2: Install Nginx on EC2

### Connect to EC2:

```bash
ssh -i your-key.pem ubuntu@YOUR_EC2_IP
```

### Install Nginx:

```bash
# Update packages
sudo apt update

# Install Nginx
sudo apt install nginx -y

# Start Nginx
sudo systemctl start nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

You should see: ✅ `Active: active (running)`

---

## Step 3: Configure Nginx

### Create Nginx Configuration:

```bash
# Create new site configuration
sudo nano /etc/nginx/sites-available/makeasite
```

### Add This Configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name makeasite.in www.makeasite.in;
    
    root /home/ubuntu/makeasite/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
    
    # Main location block
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Save and Exit:** Press `Ctrl + X`, then `Y`, then `Enter`

### Enable the Site:

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/makeasite /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t
```

You should see: ✅ `syntax is ok` and `test is successful`

### Restart Nginx:

```bash
sudo systemctl restart nginx
```

### Set Correct Permissions:

```bash
# Set proper permissions for your dist folder
sudo chown -R ubuntu:ubuntu /home/ubuntu/makeasite
sudo chmod -R 755 /home/ubuntu/makeasite
```

---

## Step 4: Configure DNS Records

### Get Your EC2 Public IP:

```bash
# On EC2, run:
curl ifconfig.me
```

Example: `13.234.56.78` (use your actual IP)

### Update DNS Records in GoDaddy/Hostinger:

#### ✅ Required DNS Records:

| Type | Name | Content/Points To | TTL |
|------|------|-------------------|-----|
| **A** | `@` | `YOUR_EC2_IP` | 600 or 3600 |
| **A** | `www` | `YOUR_EC2_IP` | 600 or 3600 |

#### ❌ Remove Conflicting Records:

**DELETE these records (they're pointing to old IP):**
- A record: `@ → 84.32.84.32`
- CNAME record: `www → makeasite.in` (replace with A record)

#### ✅ Keep These CAA Records:
These are for SSL certificates - keep them as they are.

### Step-by-Step in GoDaddy/Hostinger:

1. **Login** to your domain provider
2. **Go to DNS Management** for makeasite.in
3. **Delete** the old A record pointing to `84.32.84.32`
4. **Delete** the CNAME record for `www`
5. **Add New A Record:**
   - Type: `A`
   - Name: `@`
   - Points to: `YOUR_EC2_IP` (e.g., 13.234.56.78)
   - TTL: `600` (10 minutes)
6. **Add Second A Record:**
   - Type: `A`
   - Name: `www`
   - Points to: `YOUR_EC2_IP` (same IP)
   - TTL: `600`
7. **Save Changes**

⏰ **Wait 10-30 minutes** for DNS propagation

### Verify DNS Propagation:

```bash
# Check if DNS is updated
nslookup makeasite.in
nslookup www.makeasite.in

# Or use online tools:
# https://dnschecker.org
```

---

## Step 5: Install SSL Certificate (HTTPS)

### Install Certbot:

```bash
# Install Certbot for Nginx
sudo apt install certbot python3-certbot-nginx -y
```

### Get SSL Certificate:

```bash
# Run Certbot
sudo certbot --nginx -d makeasite.in -d www.makeasite.in
```

**Follow the prompts:**
1. Enter your email address
2. Agree to terms: `Y`
3. Share email (optional): `N`
4. Choose option: `2` (Redirect HTTP to HTTPS)

### Auto-Renewal Setup:

```bash
# Test auto-renewal
sudo certbot renew --dry-run

# Certbot automatically sets up a cron job for renewal
```

Your SSL certificate will auto-renew before expiration! 🎉

---

## Step 6: Final Verification

### Test Your Website:

1. **HTTP Test:**
   ```
   http://makeasite.in
   http://www.makeasite.in
   ```

2. **HTTPS Test:**
   ```
   https://makeasite.in
   https://www.makeasite.in
   ```

3. **Auto-Redirect Test:**
   - Visit `http://makeasite.in`
   - Should automatically redirect to `https://makeasite.in`

### Check Nginx Logs:

```bash
# View access logs
sudo tail -f /var/log/nginx/access.log

# View error logs (if any issues)
sudo tail -f /var/log/nginx/error.log
```

---

## 🔄 Updating Your Website

### When you make changes:

```bash
# On your local machine
cd /path/to/project
npm run build

# Upload to EC2
scp -i your-key.pem -r dist/* ubuntu@YOUR_EC2_IP:/home/ubuntu/makeasite/dist/

# Or use Git
ssh ubuntu@YOUR_EC2_IP
cd ~/makeasite
git pull
npm run build
```

No need to restart Nginx - changes are live immediately!

---

## Troubleshooting

### Issue: Website not loading

**Check Nginx status:**
```bash
sudo systemctl status nginx
```

**Check Nginx configuration:**
```bash
sudo nginx -t
```

**Restart Nginx:**
```bash
sudo systemctl restart nginx
```

### Issue: 403 Forbidden

**Check file permissions:**
```bash
ls -la /home/ubuntu/makeasite/dist/
sudo chown -R ubuntu:ubuntu /home/ubuntu/makeasite
sudo chmod -R 755 /home/ubuntu/makeasite
```

### Issue: DNS not resolving

**Clear DNS cache (on local machine):**

Windows:
```cmd
ipconfig /flushdns
```

Mac/Linux:
```bash
sudo dscacheutil -flushcache
```

**Check DNS propagation:**
```bash
nslookup makeasite.in
dig makeasite.in
```

### Issue: Can't access port 80/443

**Check EC2 Security Group:**

1. Go to AWS Console → EC2 → Security Groups
2. Select your instance's security group
3. Verify **Inbound Rules**:
   - Port 80 (HTTP): 0.0.0.0/0
   - Port 443 (HTTPS): 0.0.0.0/0
   - Port 22 (SSH): Your IP or 0.0.0.0/0

**Check firewall (UFW):**
```bash
sudo ufw status
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
```

### Issue: SSL certificate errors

**Check certificate status:**
```bash
sudo certbot certificates
```

**Renew certificate manually:**
```bash
sudo certbot renew --force-renewal
```

---

## 🎯 Quick Reference Commands

### Nginx Commands:
```bash
sudo systemctl start nginx      # Start
sudo systemctl stop nginx       # Stop
sudo systemctl restart nginx    # Restart
sudo systemctl reload nginx     # Reload config
sudo systemctl status nginx     # Check status
sudo nginx -t                   # Test config
```

### View Logs:
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Certbot Commands:
```bash
sudo certbot certificates               # List certificates
sudo certbot renew                      # Renew certificates
sudo certbot delete                     # Delete certificate
```

---

## 🔒 Security Best Practices

### 1. Keep System Updated:
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Configure Firewall:
```bash
sudo ufw enable
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
```

### 3. Disable Root Login:
```bash
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
sudo systemctl restart sshd
```

### 4. Install Fail2Ban:
```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
```

---

## 📊 Performance Optimization

### Enable HTTP/2:

Edit Nginx config:
```bash
sudo nano /etc/nginx/sites-available/makeasite
```

Change:
```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

### Add Rate Limiting:

```nginx
# Add before server block
limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

# Inside server block
limit_req zone=one burst=20 nodelay;
```

---

## ✅ Deployment Checklist

- [ ] Build application (`npm run build`)
- [ ] Upload dist files to EC2
- [ ] Install Nginx
- [ ] Configure Nginx site
- [ ] Set file permissions
- [ ] Update DNS A records
- [ ] Wait for DNS propagation (10-30 min)
- [ ] Install SSL certificate
- [ ] Test HTTP and HTTPS
- [ ] Verify auto-redirect to HTTPS
- [ ] Configure auto-renewal
- [ ] Set up firewall (UFW)
- [ ] Monitor logs for errors

---

## 🎉 Success!

Your website should now be live at:
- ✅ https://makeasite.in
- ✅ https://www.makeasite.in

**Congratulations on your deployment!** 🚀

---

## Need Help?

Common issues and solutions:
1. **502 Bad Gateway** → Nginx config error, check logs
2. **404 Not Found** → Wrong root path in Nginx config
3. **DNS not resolving** → Wait longer or check DNS settings
4. **SSL errors** → Make sure DNS is pointing to EC2 first

For more help, check the logs:
```bash
sudo tail -50 /var/log/nginx/error.log
```
