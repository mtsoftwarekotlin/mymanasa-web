import { Link } from "react-router-dom";
import {
    AlertCircle,
    ArrowLeft,
    CheckCircle2,
    Clock,
    HelpCircle,
    ShieldCheck,
    UserCheck,
    Brain,
    Wind,
    Heart,
    BookOpen,
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

const SUPPORT_EMAIL = "nikhil@mtsoftware.com.au";

const whatIsMyManasa = [
    {
        icon: Brain,
        label: "Mood tracking",
        description: "Log your daily mood, anxiety, stress, and sleep — and see your trends over time.",
    },
    {
        icon: Wind,
        label: "Guided exercises",
        description: "Breathing techniques, grounding, body scan, and meditation — available whenever you need them.",
    },
    {
        icon: BookOpen,
        label: "Psychoeducation",
        description: "Accessible content on anxiety, depression, stress, trauma, ADHD, and more.",
    },
    {
        icon: Heart,
        label: "Self-care & safety",
        description: "Build daily self-care goals and create your own personal safety plan.",
    },
];

const helpTopics = [
    {
        icon: UserCheck,
        title: "Account access",
        description:
            "If your account isn't active yet, our team can check your access status and get you sorted as soon as possible.",
    },
    {
        icon: ShieldCheck,
        title: "Login problems",
        description:
            "If you can't sign in to the app, make sure you're using the same email and password you set up during registration.",
    },
    {
        icon: HelpCircle,
        title: "General support",
        description:
            "Any other questions or issues with the app? Reach out and we'll do our best to help you.",
    },
];

const requiredInfo = [
    "Your full name as used during registration",
    "The email address linked to your MyManasa account",
    "A short description of what's happening",
    "A screenshot or description of the issue, if available",
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
                                How can we help?
                            </CardTitle>

                            <CardDescription className="mx-auto max-w-2xl text-[#607066]">
                                We're here to help. Whether you're having trouble with your account
                                or signing in to the app — our support team will get you sorted.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-8 p-5 md:p-7">

                            {/* What is MyManasa */}
                            <div className="rounded-3xl border border-[#b8bfb3]/70 bg-[#f7f8f5]/80 p-5">
                                <p className="text-sm font-semibold uppercase tracking-wide text-[#4a6b5c]">
                                    What is MyManasa?
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#607066]">
                                    MyManasa is a mental wellness app that helps you take care of your emotional health — from tracking how you feel day to day, to learning about mental health topics and practicing guided exercises. It's designed to be a calm, private space that supports you at your own pace.
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {whatIsMyManasa.map(({ icon: Icon, label, description }) => (
                                        <div key={label} className="rounded-2xl border border-[#b8bfb3]/50 bg-white/70 p-3">
                                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <p className="text-xs font-semibold text-[#2f453b]">{label}</p>
                                            <p className="mt-1 text-xs leading-4 text-[#607066]">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support email */}
                            <div className="rounded-3xl border border-[#b8bfb3]/70 bg-[#f7f8f5]/80 p-5">
                                <p className="text-sm font-semibold uppercase tracking-wide text-[#4a6b5c]">
                                    Contact us
                                </p>
                                <h2 className="mt-2 break-words text-2xl font-bold text-[#2f453b]">
                                    {SUPPORT_EMAIL}
                                </h2>
                                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#607066]">
                                    Send us an email describing your situation. Include your account details and we'll get back to you as soon as possible with a clear resolution.
                                </p>
                            </div>

                            {/* Help topics */}
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
                                            <h3 className="font-semibold text-[#2f453b]">{topic.title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-[#607066]">
                                                {topic.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Info to include + Before contacting */}
                            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                                <div className="rounded-3xl border border-[#b8bfb3]/70 bg-white/70 p-5">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-semibold text-[#2f453b]">
                                            What to include in your email
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {requiredInfo.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm leading-6 text-[#607066]">
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
                                            Before reaching out
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-6 text-[#607066]">
                                        Double-check that your email is spelled correctly and you're using
                                        the credentials you created during registration — not from another service.
                                    </p>
                                </div>
                            </div>

                            {/* Security notice */}
                            <div className="rounded-3xl border border-[#d6b8b8] bg-red-50/70 p-5">
                                <div className="flex gap-3">
                                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                                    <div>
                                        <h3 className="font-semibold text-red-700">Security reminder</h3>
                                        <p className="mt-1 text-sm leading-6 text-red-700/80">
                                            For your protection, never share your password with anyone. Our support team will never ask for your password or any private login credentials.
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