import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, LogIn } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/lib/supabase.client";
import { continueCheckoutSession } from "@/services/checkout.service";

export default function CompletePaymentPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setInfo("");

        if (!form.email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (!form.password) {
            setError("Please enter your password.");
            return;
        }

        try {
            setIsLoading(true);

            const { data: signInData, error: signInError } =
                await supabase.auth.signInWithPassword({
                    email: form.email.trim().toLowerCase(),
                    password: form.password,
                });

            if (signInError || !signInData?.session) {
                throw new Error("Email or password is incorrect.");
            }

            const { data: access, error: accessError } = await supabase
                .from("user_access")
                .select("status")
                .eq("user_id", signInData.user.id)
                .maybeSingle();

            if (accessError) {
                throw new Error("Could not verify your account status.");
            }

            if (access?.status === "active") {
                setInfo(
                    "Your account is already active. You can sign in to the mobile app."
                );
                setIsLoading(false);
                return;
            }

            if (!access || access.status !== "pending_payment") {
                throw new Error(
                    "This account cannot continue payment. Please contact support."
                );
            }

            const data = await continueCheckoutSession(
                signInData.session.access_token
            );

            window.location.href = data.checkoutUrl;
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4">
            <BrandHeader />

            <section className="mx-auto flex w-full max-w-md flex-col pb-16 pt-4">
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
                                <LogIn className="h-6 w-6" />
                            </div>

                            <CardTitle className="text-2xl text-[#2f453b]">
                                Complete payment
                            </CardTitle>

                            <CardDescription className="text-[#607066]">
                                If you already created your account but did not complete payment,
                                sign in to continue activation.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {error && (
                                    <Alert className="border-red-200 bg-red-50 text-red-700">
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}

                                {info && (
                                    <Alert className="border-[#b8bfb3] bg-white/80 text-[#2f453b]">
                                        <AlertDescription>{info}</AlertDescription>
                                    </Alert>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[#2f453b]">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="h-11 border-[#b8bfb3] bg-white"
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-[#2f453b]">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="h-11 border-[#b8bfb3] bg-white"
                                        autoComplete="current-password"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="h-12 w-full rounded-full bg-[#4a6b5c] text-base text-white shadow-lg hover:bg-[#3d5a4d]"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Checking account...
                                        </>
                                    ) : (
                                        "Continue to payment"
                                    )}
                                </Button>

                                <p className="text-center text-sm text-[#607066]">
                                    Do not have an account yet?{" "}
                                    <Link
                                        to="/create-account"
                                        className="font-medium text-[#4a6b5c] hover:text-[#2f453b]"
                                    >
                                        Create account
                                    </Link>
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </main>
    );
}