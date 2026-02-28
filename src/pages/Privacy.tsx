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

                    <div className="text-slate-600 space-y-8 leading-relaxed">

                        <p>
                            MakeASite.in (<strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>) is committed to protecting your personal data and handling it in a transparent, fair, and lawful manner. This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you use our website (<a href="https://makeasite.in" className="text-[#1E62FF] hover:underline">https://makeasite.in</a>) or any of our services, including website development, <strong>WhatsappBroadcaster</strong> (our WhatsApp automation platform), and any other digital or technology services we provide from time to time.
                        </p>
                        <p>
                            By using our website or services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this policy, please do not use our website or services.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
                            <p>
                                MakeASite.in is the data controller for personal data collected through our website and services. We operate from Kerala, India. For data-related queries, please contact us using the details in Section 10 below.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
                            <p>We collect the following categories of personal data:</p>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.1 Information You Provide Directly</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Identity and Contact Data:</strong> Name, email address, phone number, and business name — collected when you fill in our contact form, register for a service, or otherwise engage with us.</li>
                                <li><strong>Project and Business Information:</strong> Details you share about your business, project requirements, and preferences for the provision of our services.</li>
                                <li><strong>Payment Information:</strong> Transaction details required to process payments via Razorpay. We do not store full card numbers or sensitive payment credentials on our own servers; these are handled by Razorpay in accordance with PCI-DSS standards.</li>
                            </ul>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.2 WhatsappBroadcaster-Specific Data</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Contact Lists:</strong> Phone numbers and names you upload for your broadcasting campaigns, stored securely and used exclusively for your own campaigns.</li>
                                <li><strong>Broadcast and Usage Logs:</strong> Message history, delivery timestamps, campaign performance records, and other operational data generated through your use of the platform.</li>
                                <li><strong>Account Credentials:</strong> Login details for your WhatsappBroadcaster account and any connected WhatsApp Business API configurations you provide.</li>
                            </ul>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">2.3 Automatically Collected Data</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Usage and Technical Data:</strong> Browser type, IP address, device information, pages visited, time spent, and referral source — collected via standard web analytics tools.</li>
                                <li><strong>Cookies and Similar Technologies:</strong> We may use cookies or local storage to improve your experience on our website (e.g., remembering preferences). You may control cookie settings through your browser.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
                            <p>We use personal data for the following purposes and on the following legal bases:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>To provide, operate, and maintain our services and products — <em>performance of a contract</em>.</li>
                                <li>To manage your account, subscription, and service agreements — <em>performance of a contract</em>.</li>
                                <li>To process payments securely via Razorpay and maintain billing records — <em>performance of a contract / legal obligation</em>.</li>
                                <li>To communicate with you about your project, service updates, billing, and support — <em>performance of a contract / legitimate interests</em>.</li>
                                <li>To improve our platforms, analyse usage patterns, and develop new features — <em>legitimate interests</em>.</li>
                                <li>To comply with applicable legal and regulatory obligations — <em>legal obligation</em>.</li>
                                <li>To send you marketing communications about our services (only where you have consented or where we have a legitimate interest and you have not opted out) — <em>consent / legitimate interests</em>.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Sharing of Your Information</h2>
                            <p>We do not sell your personal data. We share data only in the following circumstances:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Meta (WhatsApp Cloud API):</strong> Used by WhatsappBroadcaster to send business messages on your behalf. Only data necessary to deliver your messages is shared. Subject to Meta's Privacy Policy.</li>
                                <li><strong>Razorpay:</strong> Payment information is processed by Razorpay for all paid plans and services. Subject to Razorpay's Privacy Policy.</li>
                                <li><strong>Legal and Regulatory Authorities:</strong> Where we are required by law, court order, or regulatory authority to disclose information.</li>
                                <li><strong>Professional Advisers:</strong> Lawyers, accountants, or auditors who are bound by professional confidentiality obligations.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction, subject to equivalent privacy protections.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal data, including encrypted data storage, secure HTTPS connections, and access controls limiting who can access your data within our organisation. However, no method of internet transmission or electronic storage is completely secure. We cannot guarantee absolute security and are not liable for unauthorised access to data arising from circumstances outside our control. If you believe your data has been compromised, please notify us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
                            <p>
                                We retain your personal data only for as long as is necessary for the purposes outlined in this policy, or as required by applicable law (e.g., financial records for tax purposes). Specifically:
                            </p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Account and project data is retained for the duration of your engagement and for a reasonable period thereafter (typically up to 3 years) for legal or business purposes.</li>
                                <li>Payment and transactional records are retained for the period required by Indian tax and financial regulations.</li>
                                <li>Contact list data in WhatsappBroadcaster is deleted upon account closure or upon your written request.</li>
                                <li>You may request deletion of your personal data at any time by contacting us; we will process the request subject to any overriding legal obligations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
                            <p>Depending on applicable law, you may have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                                <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                                <li><strong>Restriction:</strong> Request that we restrict the processing of your data in certain circumstances.</li>
                                <li><strong>Portability:</strong> Request a machine-readable copy of your data where technically feasible.</li>
                                <li><strong>Objection:</strong> Object to processing based on legitimate interests, including for direct marketing.</li>
                                <li><strong>Withdrawal of Consent:</strong> Where processing is based on consent, withdraw your consent at any time without affecting the lawfulness of prior processing.</li>
                            </ul>
                            <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:makeasite.in@gmail.com" className="text-[#1E62FF] hover:underline">makeasite.in@gmail.com</a>. We will respond to your request within a reasonable timeframe (typically 30 days).</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Third-Party Websites and Links</h2>
                            <p>
                                Our website may contain links to third-party websites or resources. This Privacy Policy does not apply to those third-party sites and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy periodically to reflect changes in our practices, services, or applicable law. Any changes will be posted on this page with a revised "Last updated" date. For material changes, where feasible, we will notify you directly. Your continued use of our website or services after changes are posted constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact Us</h2>
                            <p>For any privacy-related queries, data requests, or to submit a complaint, please contact us:</p>
                            <ul className="mt-3 space-y-1">
                                <li><strong>Business:</strong> MakeASite.in</li>
                                <li><strong>Email:</strong> <a href="mailto:makeasite.in@gmail.com" className="text-[#1E62FF] hover:underline">makeasite.in@gmail.com</a></li>
                                <li><strong>Phone:</strong> 6238014370 / 8304824323</li>
                                <li><strong>Website:</strong> <a href="https://makeasite.in" className="text-[#1E62FF] hover:underline">https://makeasite.in</a></li>
                            </ul>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
