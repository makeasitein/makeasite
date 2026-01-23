const fs = require('fs');
const path = require('path');

// Colors for console output
const GREEN = '\x1b[32m%s\x1b[0m';
const RED = '\x1b[31m%s\x1b[0m';
const YELLOW = '\x1b[33m%s\x1b[0m';
const CYAN = '\x1b[36m%s\x1b[0m';

console.log(CYAN, 'Starting SEO Analysis...\n');

// 1. Analyze Build Output (Head Tags)
const indexPath = path.join(__dirname, 'create', 'index.html');
if (!fs.existsSync(indexPath)) {
    console.log(RED, 'Error: create/index.html not found. Did the create succeed?');
    process.exit(1);
}

const htmlContent = fs.readFileSync(indexPath, 'utf8');

function checkTag(name, regex, warning = 'Missing tag') {
    const match = htmlContent.match(regex);
    if (match) {
        console.log(GREEN, `✓ ${name} found: ${match[1] || match[0].substring(0, 50) + '...'}`);
    } else {
        console.log(RED, `✗ ${name} missing! ${warning}`);
    }
}

console.log(YELLOW, '--- Checking Static Head Tags (index.html) ---');
checkTag('Title', /<title>(.*?)<\/title>/);
checkTag('Meta Description', /<meta name="description" content="(.*?)"/);
checkTag('Viewport', /<meta name="viewport"/);
checkTag('Canonical URL', /<link rel="canonical" href="(.*?)"/);
checkTag('Open Graph Title', /<meta property="og:title" content="(.*?)"/);
checkTag('Open Graph Image', /<meta property="og:image" content="(.*?)"/);
checkTag('Twitter Card', /<meta property="twitter:card"/);
checkTag('Favicon', /<link rel="icon"/);
checkTag('Language Attribute', /<html lang="(.*?)"/);

// 2. Analyze Source Code (Content Structure)
console.log(YELLOW, '\n--- Checking Source Code (React Components) ---');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            if (f.endsWith('.tsx') || f.endsWith('.jsx')) {
                callback(dirPath);
            }
        }
    });
}

let h1Count = 0;
let imgWithoutAlt = [];
const srcDir = path.join(__dirname, 'src');

if (fs.existsSync(srcDir)) {
    walkDir(srcDir, (filePath) => {
        const content = fs.readFileSync(filePath, 'utf8');

        // Check H1s
        const h1Matches = content.match(/<h1/g);
        if (h1Matches) h1Count += h1Matches.length;

        // Check Images without Alt
        // Simple regex to find <img tags that don't have alt=
        const imgMatches = content.match(/<img[^>]*>/g);
        if (imgMatches) {
            imgMatches.forEach(imgTag => {
                if (!imgTag.includes('alt=')) {
                    imgWithoutAlt.push({ file: path.relative(__dirname, filePath), tag: imgTag });
                }
            });
        }

        // Also check ImageWithFallback component usage
        const fallbackMatches = content.match(/<ImageWithFallback[^>]*>/g);
        if (fallbackMatches) {
            fallbackMatches.forEach(tag => {
                if (!tag.includes('alt=')) {
                    imgWithoutAlt.push({ file: path.relative(__dirname, filePath), tag: tag });
                }
            });
        }
    });

    if (h1Count === 0) {
        console.log(RED, '✗ No <h1> tag found in source code. SEO requires one main heading.');
    } else if (h1Count > 1) {
        console.log(YELLOW, `! Found ${h1Count} <h1> tags. Ideally, each page should have exactly one H1. (Multipage apps may report >1 total, which is fine)`);
    } else {
        console.log(GREEN, '✓ One <h1> tag found (Good practice).');
    }

    if (imgWithoutAlt.length > 0) {
        console.log(RED, `✗ Found ${imgWithoutAlt.length} images missing 'alt' attributes:`);
        imgWithoutAlt.forEach(item => {
            console.log(`  - ${item.file}: ${item.tag.substring(0, 50)}...`);
        });
    } else {
        console.log(GREEN, '✓ All images appear to have `alt` attributes.');
    }

} else {
    console.log(RED, 'src directory not found.');
}

console.log(CYAN, '\nAnalysis Complete.');
