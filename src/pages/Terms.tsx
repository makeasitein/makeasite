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

                    <div className="text-slate-600 space-y-8 leading-relaxed">

                        <p>
                            Welcome to MakeASite.in. These Terms and Conditions (<strong>"Terms"</strong>) govern your use of our website (<a href="https://makeasite.in" className="text-[#1E62FF] hover:underline">https://makeasite.in</a>) and the services we provide, including website development, WhatsApp automation, hosting, maintenance, and related digital solutions. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Definitions</h2>
                            <ul className="space-y-2">
                                <li><strong>"We", "Us", "Our", "Company"</strong> refers to MakeASite.in and its operators, representatives, and authorised agents.</li>
                                <li><strong>"You", "Client", "Customer", "User"</strong> refers to the individual or business (and any person acting on its behalf) accessing our website or using our services.</li>
                                <li><strong>"Services"</strong> refers to website design and development, WhatsApp automation, hosting, maintenance, consulting, and any other digital or technology-related services we offer, whether one-time or recurring.</li>
                                <li><strong>"WhatsappBroadcaster"</strong> is an internal product name used by MakeASite.in for identification and reference purposes only. It is <em>not</em> a registered trademark, official brand, or separate legal entity. Any reference to "WhatsappBroadcaster" in these Terms or in communications from us refers solely to MakeASite.in's WhatsApp automation service.</li>
                                <li><strong>"Service Agreement"</strong> means any separate written agreement, proposal, quote, or order form that describes the specific scope, deliverables, timeline, and payment terms for a project or service.</li>
                                <li><strong>"Content"</strong> means any text, images, graphics, data, or other materials you provide to us or that are included in the deliverables we create for you.</li>
                                <li><strong>"Deliverables"</strong> means the work product we agree to provide under a Service Agreement (e.g., website, design files, configurations, documentation).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Acceptance and Formation of Contract</h2>
                            <p>
                                By placing an order, signing a proposal, making a payment, or otherwise engaging our services, you accept these Terms and any applicable Service Agreement. If you are acting on behalf of a business, you represent that you have the authority to bind that business. A contract is formed when we accept your order or when you accept our proposal/quote in the manner specified (e.g., signature, payment, or written confirmation).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Use of Our Website</h2>
                            <p>You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Use the website in any way that could damage, disable, or impair the site or our systems, or that could affect other users' access.</li>
                                <li>Attempt to gain unauthorised access to any part of our or our clients' systems, accounts, or data.</li>
                                <li>Use the website to transmit any virus, malware, or other harmful code, or to collect or harvest personal information of others without consent.</li>
                                <li>Use the website for any purpose that is illegal, fraudulent, or in violation of any applicable law or regulation.</li>
                            </ul>
                            <p className="mt-3">You are responsible for maintaining the confidentiality of any account credentials we provide and for all activities that occur under your account. You must notify us promptly of any unauthorised use or security breach.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Services and Service Agreements</h2>
                            <p>
                                Specific projects and services are governed by the applicable Service Agreement (proposal, quote, or order). In the event of a conflict between these Terms and a Service Agreement, the Service Agreement shall prevail for that project or service, except where these Terms expressly state otherwise or where the Service Agreement is silent. Payment terms, delivery timelines, scope, and acceptance criteria will be as specified in the Service Agreement or as communicated in writing. We will perform the services with reasonable skill and care and in accordance with the agreed scope. Any change to scope, timeline, or price must be agreed in writing.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mt-5 mb-2">WhatsApp Automation Service (referred to internally as "WhatsappBroadcaster")</h3>
                            <p>
                                MakeASite.in operates a WhatsApp broadcasting and automation SaaS platform. For internal reference and identification purposes, this service is referred to as <strong>"WhatsappBroadcaster"</strong> — this is an internal product name only and does not constitute a separate legal entity, registered trademark, or official brand. All contractual obligations, liabilities, and rights in relation to this service rest solely with MakeASite.in. Use of this service is additionally subject to Meta (WhatsApp) Business and Commerce Policies. You must not use this service to send spam or unsolicited messages. You are solely responsible for obtaining the necessary consents from your contacts before messaging them. We reserve the right to suspend your access if you violate WhatsApp's policies or applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Payment Terms</h2>
                            <p>
                                Payment terms will be as agreed in the Service Agreement (e.g., advance payment, milestone-based payments, or full payment on completion). You agree to pay all fees and any applicable taxes by the due date(s) specified. All payments are processed securely via <strong>Razorpay</strong>; we do not store your full card or payment credentials. Late payments may attract interest or suspension of services until payment is received. You are responsible for any bank or payment provider charges (e.g., failed payment fees) that result from your payment method.
                            </p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>WhatsappBroadcaster:</strong> ₹600/month, prepaid. Service remains active through the 7th of the following month after payment.</li>
                                <li><strong>Web Development Services:</strong> Project-based pricing as agreed in individual service proposals.</li>
                                <li>We reserve the right to revise pricing for any product with prior notice before your next billing cycle.</li>
                                <li>All amounts are in Indian Rupees (INR) unless stated otherwise.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
                            <p>
                                <strong>Deliverables:</strong> Upon full payment, ownership of custom work created specifically for you transfers to you as specified in the Service Agreement. We retain all rights in our pre-existing materials, tools, templates, and generic components and grant you a non-exclusive, perpetual licence to use them as part of your project.
                            </p>
                            <p className="mt-3">
                                <strong>Portfolio and marketing:</strong> We may showcase your project (e.g., website, screenshots, case study) in our portfolio or marketing materials unless you request otherwise in writing at or before project completion.
                            </p>
                            <p className="mt-3">
                                <strong>Third-party assets:</strong> Any third-party assets (e.g., fonts, stock images, plugins, APIs) remain subject to their respective licences. You are responsible for complying with those licences.
                            </p>
                            <p className="mt-3">
                                All content, brand assets, software, platform code, and designs belonging to MakeASite.in, WhatsappBroadcaster, and other products are the exclusive intellectual property of MakeASite.in. You may not reproduce, copy, distribute, or create derivative works from any of our materials without prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Client Responsibilities</h2>
                            <p>You agree to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Provide timely feedback, content, access (e.g., hosting, WhatsApp Business API, or other accounts), and approvals as required for the project within the timeframes we reasonably specify.</li>
                                <li>Ensure that any content or materials you provide do not infringe any third-party rights (including intellectual property and privacy) and do not violate any applicable law.</li>
                                <li>Cooperate with us in good faith and not obstruct or delay the project through unreasonable demands or failure to provide necessary information or access.</li>
                            </ul>
                            <p className="mt-3">Delays or additional costs caused by the client (e.g., late feedback, scope changes, non-provision of content or access) may result in revised timelines and may incur additional charges as agreed.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Warranties and Disclaimers</h2>
                            <p>
                                We warrant that we will perform the services with reasonable skill and care and that the deliverables will substantially conform to the agreed scope and specifications at the time of delivery. Your sole remedy for breach of this warranty is, at our option: (a) re-performance or correction of the non-conforming work, or (b) a refund subject to our Refund Policy.
                            </p>
                            <p className="mt-3">
                                Except as expressly stated above, our website and services are provided <strong>"as is"</strong>. We disclaim all other warranties, express or implied. We are not responsible for the actions, availability, or policies of third-party services (e.g., WhatsApp, hosting providers, payment gateways, domain registrars) beyond our reasonable control.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Limitation of Liability</h2>
                            <p>To the fullest extent permitted by applicable law:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>Our total liability for any claim shall not exceed the amount you have paid us for the relevant service(s) in the twelve (12) months preceding the first event giving rise to the claim.</li>
                                <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, goodwill, or business opportunity.</li>
                                <li>We shall not be liable for any loss or damage arising from your use of or reliance on third-party services, your content, or your failure to comply with these Terms.</li>
                            </ul>
                            <p className="mt-3">Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Indemnification</h2>
                            <p>
                                You agree to indemnify, defend, and hold harmless MakeASite.in and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of our website or services; (b) your content or any materials you provide; (c) your violation of these Terms or any applicable law; or (d) any claim that your content or use of the deliverables infringes any third-party right.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Confidentiality</h2>
                            <p>
                                Each party agrees to keep confidential any non-public information received from the other party in connection with the services (e.g., business plans, technical data, pricing). This obligation does not apply to information that is publicly available, independently developed, or rightfully received from a third party without restriction. Confidentiality obligations survive termination of the services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Termination</h2>
                            <p>
                                We may suspend or terminate your access to our website or services if you breach these Terms or the Service Agreement, or for any other reason we deem necessary (e.g., non-payment, illegal use). Upon termination, your right to use the affected services ceases. Provisions that by their nature should survive (e.g., payment, intellectual property, limitation of liability, indemnification, confidentiality, governing law) will remain in effect after termination.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">13. Force Majeure</h2>
                            <p>
                                Neither party shall be liable for any failure or delay in performing its obligations (other than payment obligations) where such failure or delay results from circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, government actions, internet outages, third-party platform outages (e.g., Meta/WhatsApp), or other events outside the reasonable control of the affected party.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">14. Third-Party Services</h2>
                            <p>Our platforms may integrate with or rely on third-party services including, but not limited to:</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li><strong>Meta (WhatsApp Cloud API)</strong> – For message delivery via WhatsappBroadcaster.</li>
                                <li><strong>Razorpay</strong> – For secure payment processing across all paid products and services.</li>
                            </ul>
                            <p className="mt-3">Use of these services is governed by their own respective Terms of Service. MakeASite.in is not responsible for third-party service outages or policy changes.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">15. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Kerala, India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">16. Changes to These Terms</h2>
                            <p>
                                We may update these Terms from time to time. The updated version will be posted on this page with a revised "Last updated" date. Your continued use of our website or services after changes constitutes acceptance of the updated Terms where applicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">17. Contact Us</h2>
                            <p>For any questions regarding these Terms, please contact us:</p>
                            <ul className="mt-3 space-y-1">
                                <li><strong>Business:</strong> MakeASite.in</li>
                                <li><strong>Email:</strong> <a href="mailto:makeasite.in@gmail.com" className="text-[#1E62FF] hover:underline">makeasite.in@gmail.com</a></li>
                                <li><strong>Phone:</strong> 6238014370 / 8304824323</li>
                                <li><strong>Website:</strong> <a href="https://makeasite.in" className="text-[#1E62FF] hover:underline">makeasite.in</a></li>
                            </ul>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
