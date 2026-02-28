import { motion } from 'framer-motion';

export function Refund() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50"
                >
                    <h1 className="heading-font text-4xl mb-3 text-slate-900">Refund Policy</h1>
                    <p className="text-sm text-slate-500 font-medium mb-8">Last Updated: February 28, 2026</p>

                    <div className="text-slate-600 space-y-8 leading-relaxed">

                        <p>
                            MakeASite.in ("we", "us", "our") is committed to transparency and fair dealing with our clients. This Refund Policy outlines the circumstances under which refunds may be applicable for our website development, WhatsApp automation, and related digital services. Please read this policy carefully before engaging our services or making a payment.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Scope and Application</h2>
                            <p className="mb-3">This policy applies to all payments made through our website, payment links, bank transfer, or any other method for services offered by MakeASite.in, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Website design and development (one-time and ongoing projects)</li>
                                <li>WhatsApp automation setup, configuration, and maintenance (<strong>WhatsappBroadcaster</strong>)</li>
                                <li>Hosting and domain-related services</li>
                                <li>Maintenance, support, and update packages</li>
                                <li>One-time or recurring service packages, retainers, and subscriptions</li>
                                <li>Consultation, audits, and other professional services</li>
                            </ul>
                            <p className="mt-3">
                                This policy does not apply to third-party products or services (e.g., domain registrars, hosting providers, WhatsApp Business API fees) for which refunds are governed by the respective third party's terms. We will, where possible, assist you in communicating with such third parties but cannot guarantee refunds from them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">General Refund Terms</h2>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">Before Project Commencement</h3>
                            <p>
                                If you have made an advance or full payment and the project has not yet been started as per our agreed timeline and scope, you may request a refund. "Started" means we have begun active work (e.g., design drafts, development, configuration) as defined in the project agreement or quote. We will process the refund after deducting any applicable payment gateway or processing charges that we have incurred and cannot recover. If no work has been initiated, we aim to process such refunds within 7–14 business days of the approved request.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">After Project Commencement</h3>
                            <p>
                                Once work has begun (e.g., design, development, or configuration), refunds are generally not offered for the portion of work already completed or delivered. We work in phases and milestones; refund eligibility for any unused portion (e.g., remaining milestones not yet started) will be assessed on a case-by-case basis. Factors we consider include: how much of the project has been completed, whether the delay or non-completion is due to us or to the client (e.g., non-provision of content, delayed feedback), and whether we can reasonably re-allocate resources.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mt-4 mb-2">Completed Deliverables</h3>
                            <p>
                                No refund is provided for work that has been completed and delivered as per the agreed scope and acceptance criteria. If you believe the delivered work does not meet the agreed scope or quality, you must notify us in writing within the acceptance period (if specified in your service agreement) or within a reasonable time (e.g., 7–14 days of delivery). We will then work with you to remedy the issue (revisions, fixes) before any refund is considered. Refunds for completed work are only considered in exceptional cases where we have failed to meet our contractual obligations despite a reasonable opportunity to cure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Eligibility for Refund</h2>
                            <p className="mb-3">You may be eligible for a full or partial refund only if one or more of the following apply:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We have failed to deliver the agreed scope within the agreed timeline and have not offered a reasonable resolution (e.g., revised timeline, partial delivery, or alternative remedy).</li>
                                <li>There is a clear and material breach of our Terms and Conditions or the service agreement on our part, and the breach cannot be remedied within a reasonable time.</li>
                                <li>You cancel in writing before any work has commenced and within the timeframe (if any) stated in your service agreement or quote (e.g., within 7 days of payment where we have not yet started).</li>
                                <li>We are unable to perform the service due to circumstances beyond your control (e.g., we discontinue the service, or a fundamental change in our ability to deliver).</li>
                            </ul>
                            <p className="mt-4 mb-3 font-medium text-slate-700">Refunds are <strong>not</strong> provided in the following situations:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Change of mind or change of business requirements after the project has started.</li>
                                <li>Delays or non-completion caused primarily by the client (e.g., delayed feedback, non-provision of content, materials, or access; repeated scope changes).</li>
                                <li>Dissatisfaction with the result where the deliverable meets the agreed scope and acceptance criteria and we have offered reasonable revisions as per the agreement.</li>
                                <li>Third-party issues (e.g., hosting downtime, WhatsApp API restrictions, payment gateway issues) that are outside our direct control, unless we have expressly guaranteed a specific outcome.</li>
                                <li>Any period of service already consumed (e.g., hosting or support already provided for a paid period).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Refund Request Process</h2>
                            <p className="mb-3">To request a refund, you must contact us in writing (email is sufficient) at <a href="mailto:makeasite.in@gmail.com" className="text-[#1E62FF] hover:underline">makeasite.in@gmail.com</a> with the following information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your full name and contact details</li>
                                <li>Order or project reference (e.g., invoice number, project name, date of payment)</li>
                                <li>Amount paid and method of payment</li>
                                <li>Clear reason for the refund request and how it falls within the eligibility criteria above</li>
                            </ul>
                            <p className="mt-3">
                                We will acknowledge your request within 3–5 business days and will review it in good faith. We may ask for additional information or documentation. A decision will be communicated to you within 10–15 business days of receiving all necessary information. If your request is approved, we will initiate the refund as described below. If it is not approved, we will explain the reason and, where applicable, suggest alternative resolutions (e.g., revisions, partial delivery, credit for future work).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Processing of Refunds</h2>
                            <p className="mb-3">
                                Approved refunds will be processed to the original payment method (or as otherwise agreed in writing) within 7–14 business days from the date of approval. The actual credit to your account may take additional time depending on your bank or payment provider (e.g., 5–10 business days for card refunds). Any payment gateway or processing fees that we have incurred and cannot recover may be deducted from the refund amount as permitted by law and our agreement with you.
                            </p>
                            <p>
                                For payments made via bank transfer or other methods, we may refund via the same method or another method agreed with you. You are responsible for providing correct and complete bank or payment details. We are not liable for refunds sent to incorrect details provided by you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Partial Refunds and Credits</h2>
                            <p>
                                In some cases, we may offer a partial refund (e.g., for an unused portion of a project or subscription) or a credit toward future services instead of a cash refund. Any such offer will be communicated in writing. If you accept a credit, it will be subject to our then-current terms and must typically be used within a specified period (e.g., 12 months) unless otherwise agreed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Recurring and Subscription Services</h2>
                            <p className="mb-3">For recurring or subscription-based services (e.g., monthly hosting, maintenance plans, WhatsappBroadcaster WhatsApp automation plans), the following applies:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cancellation:</strong> You may cancel your subscription or recurring service as per the terms in your service agreement (e.g., with 30 days' notice). Cancellation will stop future charges from the next billing cycle.</li>
                                <li><strong>Refunds for current period:</strong> Refunds for the current billing period are generally not provided once the period has started, as the service is available for use. Exceptions may be made where we have failed to provide the service (e.g., prolonged unavailability, material breach) and the failure is not due to third-party or client-side issues.</li>
                                <li><strong>Annual or upfront payments:</strong> If you have paid annually or for a longer period in advance and you cancel before the end of that period, we may offer a pro-rata refund for the unused portion at our discretion, after deducting any applicable fees and subject to the eligibility criteria above.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Disputes and Resolution</h2>
                            <p>
                                If you are dissatisfied with our services, we encourage you to contact us first. We will try to resolve the issue through revisions, additional support, or other mutually agreed solutions before considering a refund. We are committed to resolving disputes in good faith. If we are unable to resolve a dispute, the matter will be subject to our Terms and Conditions (including any dispute resolution or governing law provisions).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Chargebacks and Payment Disputes</h2>
                            <p>
                                If you dispute a charge with your bank or payment provider (chargeback) without first contacting us, we may contest the chargeback and provide evidence of the service agreement and delivery. Chargebacks may result in suspension of services and may affect your ability to use our services in the future. We request that you contact us first so we can address your concerns and, where appropriate, process a refund in accordance with this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Changes to This Policy</h2>
                            <p>
                                We may update this Refund Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date. For existing projects or subscriptions, the policy in effect at the time of your payment or agreement may apply unless we notify you otherwise. Your continued use of our services after changes constitutes acceptance of the updated policy where applicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
                            <p className="mb-3">For any refund-related queries or to submit a refund request, please contact us:</p>
                            <ul className="space-y-1">
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
