import { motion } from 'framer-motion';

export function Terms() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50"
                >
                    <h1 className="heading-font text-4xl mb-3 text-slate-900">Terms and Conditions</h1>
                    <p className="text-sm text-slate-500 font-medium mb-8">Last Updated: February 28, 2026</p>

                    <div className="text-slate-600 space-y-8">

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">1. About MakeASite.in</h2>
                            <p className="leading-relaxed">
                                MakeASite.in is a technology and digital services company based in Kerala, India. We provide professional web development, digital growth, and SaaS-based automation solutions to businesses. Our current product and service portfolio includes:
                            </p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Web Development Services</strong> – Custom websites, landing pages, e-commerce setups, and branding kits for businesses.</li>
                                <li><strong>WappBroadcaster</strong> – A WhatsApp broadcasting and automation SaaS platform for business marketing (accessible at <a href="https://zookie-frontend.onrender.com" className="text-[#1E62FF] hover:underline" target="_blank" rel="noopener noreferrer">zookie-frontend.onrender.com</a>).</li>
                            </ul>
                            <p className="leading-relaxed mt-3">
                                By using any of our websites, platforms, or services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of Services</h2>
                            <p className="leading-relaxed">All services offered by MakeASite.in must be used for lawful purposes only. By using our services, you agree that:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>You will not use our platforms to distribute spam, unsolicited messages, or harmful content.</li>
                                <li>For WappBroadcaster specifically, you are responsible for complying with WhatsApp's Business Policy, Commerce Policy, and applicable Indian telecommunications regulations.</li>
                                <li>You are responsible for obtaining the necessary consents from your contacts before messaging them via WappBroadcaster.</li>
                                <li>You will not misuse, reverse-engineer, or exploit any part of our platforms or APIs.</li>
                                <li>We reserve the right to suspend or terminate access to any product or service immediately if you violate these terms.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Payment and Subscription</h2>
                            <p className="leading-relaxed">Paid services and SaaS products offered under MakeASite.in are provided on a prepaid basis. Payments are processed securely via <strong>Razorpay</strong>.</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>WappBroadcaster:</strong> ₹600/month, prepaid. Service remains active through the 7th of the following month after payment.</li>
                                <li><strong>Web Development Services:</strong> Project-based pricing as agreed upon in individual service proposals.</li>
                                <li>We reserve the right to revise pricing for any product with prior notice before your next billing cycle.</li>
                                <li>All amounts are in Indian Rupees (INR) unless stated otherwise.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Intellectual Property</h2>
                            <p className="leading-relaxed">
                                All content, brand assets, software, platform code, and designs belonging to MakeASite.in, WappBroadcaster and other products are the exclusive intellectual property of MakeASite.in. You may not reproduce, copy, distribute, or create derivative works from any of our materials without prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
                            <p className="leading-relaxed">Our platforms may integrate with or rely on third-party services including, but not limited to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Meta (WhatsApp Cloud API)</strong> – For message delivery via WappBroadcaster.</li>
                                <li><strong>Razorpay</strong> – For secure payment processing across all paid products.</li>
                            </ul>
                            <p className="leading-relaxed mt-3">Use of these services is governed by their own respective Terms of Service. MakeASite.in is not responsible for third-party service outages or policy changes.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                MakeASite.in shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, goodwill, or business interruption — arising from your use of or inability to use any of our services or products.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Termination</h2>
                            <p className="leading-relaxed">
                                We may terminate or suspend access to any of our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the relevant service will cease immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Governing Law</h2>
                            <p className="leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Kerala, India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact Us</h2>
                            <p className="leading-relaxed">If you have any questions about these Terms, please contact us:</p>
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
