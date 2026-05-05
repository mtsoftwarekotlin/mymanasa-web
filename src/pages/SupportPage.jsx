import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4">
            <BrandHeader />

            <section className="mx-auto flex w-full max-w-2xl flex-col pb-16 pt-4">
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
                    <Card className="border-[#b8bfb3]/70 bg-white/85 shadow-2xl backdrop-blur-sm">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                                <HelpCircle className="h-6 w-6" />
                            </div>

                            <CardTitle className="text-2xl text-[#2f453b]">
                                Support
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="rounded-2xl border border-[#b8bfb3]/70 bg-white/70 p-4">
                                <h2 className="font-semibold text-[#2f453b]">
                                    Account not active
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#607066]">
                                    If your account appears as not active, payment may not have
                                    been completed or activation may still be processing.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#b8bfb3]/70 bg-white/70 p-4">
                                <h2 className="font-semibold text-[#2f453b]">
                                    Payment canceled
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#607066]">
                                    If you canceled payment, your account can remain incomplete.
                                    Use the complete payment page to continue activation.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#b8bfb3]/70 bg-white/70 p-4">
                                <h2 className="font-semibold text-[#2f453b]">
                                    Cannot sign in
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#607066]">
                                    Make sure you are using the same email and password you used
                                    when creating your account.
                                </p>
                            </div>

                            <Button
                                asChild
                                className="h-12 w-full rounded-full bg-[#4a6b5c] text-base text-white shadow-lg hover:bg-[#3d5a4d]"
                            >
                                <a href="mailto:support@mymanasa.com">
                                    <Mail className="h-5 w-5" />
                                    Contact support
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </main>
    );
}