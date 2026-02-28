import { motion } from 'framer-motion';

export function Privacy() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50"
                >
                    <h1 className="heading-font text-4xl mb-3 text-slate-900">Privacy Policy</h1>
                    <p className="text-sm text-slate-500 font-medium mb-8">Last Updated: February 28, 2026</p>

                    <div className="text-slate-600 space-y-8">

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">1. About This Policy</h2>
                            <p className="leading-relaxed">
                                This Privacy Policy applies to all services and products provided by <strong>MakeASite.in</strong>, including our web development services, <strong>WappBroadcaster</strong> (our WhatsApp automation platform). We are committed to protecting your personal data in accordance with applicable Indian data protection laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
                            <p className="leading-relaxed">We collect the following types of information to provide and improve our services:</p>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.1 Personal Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name, email address, and phone number — for account creation and service delivery.</li>
                                <li>Business name and address — for web development engagements and service agreements.</li>
                            </ul>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.2 WappBroadcaster Specific Data</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Contact Lists:</strong> Phone numbers and names you upload for broadcasting campaigns. These are stored securely and used only for your own campaigns.</li>
                                <li><strong>Broadcast Logs:</strong> Message history, delivery timestamps, and status records.</li>
                            </ul>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.3 Usage Data</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Browser type, IP address, pages visited, and time spent — collected automatically via standard web analytics.</li>
                            </ul>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.4 Payment Data</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Transaction details processed via Razorpay. We do not store full card numbers or sensitive payment credentials on our servers.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide, operate, and maintain our services and products.</li>
                                <li>To manage your account, subscription, and service agreements.</li>
                                <li>To process payments securely via Razorpay.</li>
                                <li>To send you service updates, billing notifications, and support communications.</li>
                                <li>To improve our platforms and analyse usage patterns.</li>
                                <li>To comply with legal and regulatory obligations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Third-Party Services</h2>
                            <p className="leading-relaxed">We work with trusted third-party service providers to operate our platforms:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Meta (WhatsApp Cloud API):</strong> Used by WappBroadcaster to send business messages. Subject to Meta's own Privacy Policy.</li>
                                <li><strong>Razorpay:</strong> Handles payment processing for all paid plans across MakeASite.in products. Subject to Razorpay's Privacy Policy.</li>
                            </ul>
                            <p className="leading-relaxed mt-3">These third parties receive only the data necessary to perform their function and are not authorised to use it for any other purpose.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
                            <p className="leading-relaxed">
                                We implement industry-standard security measures to protect your personal data, including encrypted storage and secure HTTPS connections. However, no method of internet transmission or electronic storage is completely secure and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
                            <p className="leading-relaxed">
                                We retain your personal data only as long as necessary for the purposes outlined in this policy, or as required by law. You may request deletion of your personal data at any time by contacting us. Contact list data in WappBroadcaster is deleted upon account closure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
                            <p className="leading-relaxed">Under applicable law, you have the right to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Access the personal data we hold about you.</li>
                                <li>Request correction of inaccurate data.</li>
                                <li>Request deletion of your data.</li>
                                <li>Withdraw consent for data processing where consent is the legal basis.</li>
                            </ul>
                            <p className="leading-relaxed mt-3">To exercise any of these rights, please contact us at the details below.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to This Privacy Policy</h2>
                            <p className="leading-relaxed">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes your acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact Us</h2>
                            <p className="leading-relaxed">For any privacy-related queries or data requests, please contact us:</p>
                            <ul className="mt-3 space-y-1">
                                <li><strong>Business:</strong> MakeASite.in</li>
                                <li><strong>Email:</strong> <a href="mailto:makeasite.in@gmail.com" className="text-[#1E62FF] hover:underline">makeasite.in@gmail.com</a></li>
                                <li><strong>Phone:</strong> +91 6238014370 / +91 8304824323</li>
                                <li><strong>Website:</strong> <a href="https://makeasite.in" className="text-[#1E62FF] hover:underline">makeasite.in</a></li>
                            </ul>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
