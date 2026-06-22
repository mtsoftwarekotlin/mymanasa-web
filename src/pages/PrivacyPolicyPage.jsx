import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";

const sections = [
    {
        title: "1. Who we are",
        content: `MyManasa is a mental wellness application developed and operated by MindWell. We are committed to protecting your privacy and handling your personal information with care and transparency. If you have any questions about this policy, you can reach us at nikhil@mtsoftware.com.au.`,
    },
    {
        title: "2. Information we collect",
        content: `We collect information you provide directly when you create an account, such as your name and email address. We also collect data you enter within the app, including mood logs, journal entries, and responses to wellness exercises. Additionally, we collect technical information such as device type, operating system, and usage patterns to improve the app experience.`,
    },
    {
        title: "3. How we use your information",
        content: `We use your information to provide and improve the MyManasa service, personalize your experience, send important account notifications and ensure the security of your account. We do not use your personal wellness data for advertising purposes.`,
    },
    {
        title: "4. Mental health data",
        content: `We treat your mental health information — including mood entries, journal content, and safety plans — with the highest level of sensitivity. This data is stored securely and is never sold to third parties. It is used solely to power the features you use within the app and to generate anonymized, aggregated insights for service improvement.`,
    },
    {
        title: "5. Data sharing",
        content: `We do not sell your personal information. We may share data with trusted service providers (such as payment processors and cloud infrastructure providers) who assist us in operating the service, under strict confidentiality agreements. We may also disclose information when required by law or to protect the safety of our users or the public.`,
    },
    {
        title: "6. Data retention",
        content: `We retain your account and wellness data for as long as your account is active. If you delete your account, we will remove your personal data within 30 days, except where retention is required by applicable law.`,
    },
    {
        title: "7. Your rights",
        content: `Depending on your location, you may have the right to access, correct, or delete your personal data; withdraw consent at any time; request a copy of your data in a portable format; and lodge a complaint with your local data protection authority. To exercise any of these rights, contact us at support@mymanasa.app.`,
    },
    {
        title: "8. Security",
        content: `We use industry-standard security measures including encryption in transit (TLS) and at rest to protect your data. Access to personal data is restricted to authorized personnel only. While we work hard to protect your information, no system is 100% secure, and we encourage you to use a strong password and keep your account credentials private.`,
    },
    {
        title: "9. Children's privacy",
        content: `MyManasa is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately so we can delete it.`,
    },
    {
        title: "10. Changes to this policy",
        content: `We may update this Privacy Policy from time to time. When we do, we will notify you by updating the date at the bottom of this page and, for significant changes, by sending a notice to the email address associated with your account.`,
    },
    {
        title: "11. Contact",
        content: `If you have questions, concerns, or requests related to this Privacy Policy, please contact us at support@mymanasa.app. We aim to respond within 5 business days.`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4 flex flex-col">
            <BrandHeader />

            <section className="mx-auto w-full max-w-3xl flex-1 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <Button
                        asChild
                        variant="ghost"
                        className="mb-6 -ml-2 text-[#4a6b5c] hover:bg-[#4a6b5c]/10 hover:text-[#3d5a4d]"
                    >
                        <Link to="/">
                            <ArrowLeft className="mr-1 h-4 w-4" />
                            Back to home
                        </Link>
                    </Button>

                    <div className="rounded-3xl border border-[#b8bfb3]/60 bg-white/60 p-8 backdrop-blur-sm md:p-12">
                        <h1 className="text-3xl font-bold tracking-tight text-[#2f453b] md:text-4xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-2 text-sm text-[#6f7f73]">
                            Last updated: June 2025
                        </p>

                        <p className="mt-6 text-base leading-7 text-[#607066] text-justify">
                            Your privacy matters to us. This policy explains what information
                            MyManasa collects, how we use it, and the choices you have over
                            your data.
                        </p>

                        <div className="mt-8 space-y-8 text-justify">
                            {sections.map(({ title, content }) => (
                                <div key={title}>
                                    <h2 className="text-lg font-semibold text-[#2f453b]">
                                        {title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-7 text-[#607066]">
                                        {content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-[#6f7f73]">
                        Questions?{" "}
                        <Link
                            to="/support"
                            className="font-semibold text-[#4a6b5c] underline-offset-4 hover:underline"
                        >
                            Contact support
                        </Link>
                    </p>
                </motion.div>
            </section>
        </main>
    );
}