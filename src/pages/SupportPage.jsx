import { Link } from "react-router-dom";
import {
    AlertCircle,
    ArrowLeft,
    CheckCircle2,
    Clock,
    CreditCard,
    HelpCircle,
    ShieldCheck,
    UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const SUPPORT_EMAIL = "support@mymanasa.com";

const helpTopics = [
    {
        icon: UserCheck,
        title: "Account activation",
        description:
            "If your account was created but your access is not active yet, our support team can review your activation status.",
    },
    {
        icon: CreditCard,
        title: "Payment issues",
        description:
            "If your payment was canceled, failed, duplicated, or not reflected in your account, support can help verify it.",
    },
    {
        icon: ShieldCheck,
        title: "Login problems",
        description:
            "If you cannot sign in, make sure you are using the same email and password used during registration.",
    },
];

const requiredInfo = [
    "Full name used during registration",
    "Email linked to your MyManasa account",
    "Brief explanation of the problem",
    "Payment reference or screenshot, if available",
];

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4">
            <BrandHeader />

            <section className="mx-auto flex w-full max-w-4xl flex-col pb-16 pt-4">
                <Link
                    to="/"
                    className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#4a6b5c] hover:text-[#2f453b]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <Card className="overflow-hidden border-[#b8bfb3]/70 bg-white/85 shadow-2xl backdrop-blur-sm">
                        <CardHeader className="border-b border-[#b8bfb3]/50 bg-white/55 text-center">
                            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                <HelpCircle className="h-7 w-7" />
                            </div>

                            <CardTitle className="text-3xl text-[#2f453b]">
                                MyManasa Support
                            </CardTitle>

                            <CardDescription className="mx-auto max-w-2xl text-[#607066]">
                                If you have problems creating your account, completing
                                payment, activating access, or signing in to the mobile app,
                                please contact our support team.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-7 p-5 md:p-7">
                            <div className="rounded-3xl border border-[#b8bfb3]/70 bg-[#f7f8f5]/80 p-5">
                                <p className="text-sm font-semibold uppercase tracking-wide text-[#4a6b5c]">
                                    Support email
                                </p>

                                <h2 className="mt-2 break-words text-2xl font-bold text-[#2f453b]">
                                    {SUPPORT_EMAIL}
                                </h2>

                                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#607066]">
                                    Please send an email with your account details and a short
                                    explanation of the issue. This helps our support team review
                                    your case faster and provide a clear response.
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                {helpTopics.map((topic) => {
                                    const Icon = topic.icon;

                                    return (
                                        <div
                                            key={topic.title}
                                            className="rounded-3xl border border-[#b8bfb3]/70 bg-white/70 p-5 shadow-sm"
                                        >
                                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <h3 className="font-semibold text-[#2f453b]">
                                                {topic.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-[#607066]">
                                                {topic.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                                <div className="rounded-3xl border border-[#b8bfb3]/70 bg-white/70 p-5">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>

                                        <h3 className="font-semibold text-[#2f453b]">
                                            Information to include
                                        </h3>
                                    </div>

                                    <ul className="space-y-3">
                                        {requiredInfo.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm leading-6 text-[#607066]"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4a6b5c]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-3xl border border-[#b8bfb3]/70 bg-white/70 p-5">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                            <Clock className="h-5 w-5" />
                                        </div>

                                        <h3 className="font-semibold text-[#2f453b]">
                                            Before contacting support
                                        </h3>
                                    </div>

                                    <p className="text-sm leading-6 text-[#607066]">
                                        Please verify that your email is written correctly,
                                        your payment was completed, and you are using the same
                                        credentials created on this website.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#d6b8b8] bg-red-50/70 p-5">
                                <div className="flex gap-3">
                                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                                    <div>
                                        <h3 className="font-semibold text-red-700">
                                            Important security notice
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-red-700/80">
                                            Never send your password by email. MyManasa support
                                            will never ask for your password or private login
                                            credentials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </main>
    );
}