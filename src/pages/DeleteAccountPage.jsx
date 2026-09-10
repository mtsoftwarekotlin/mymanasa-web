import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Smartphone, Mail, AlertTriangle, Database, LogOut } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";

const SUPPORT_EMAIL = "nikhil@mtsoftware.com.au";

export default function DeleteAccountPage() {
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

                    <div className="rounded-3xl border border-[#b8bfb3]/60 bg-white/60 p-8 backdrop-blur-sm md:p-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-600">
                            <Trash2 className="h-6 w-6" />
                        </div>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#2f453b] md:text-4xl">
                            How to Delete Your Account and Data
                        </h1>
                        <p className="mt-3 text-base leading-7 text-[#607066]">
                            In MyManasa you can delete your account and all associated data directly from the mobile app (Android / iOS).
                            This page explains how, what gets deleted, and how to request deletion if you no longer have access to the app.
                        </p>

                        {/* Steps */}
                        <div className="mt-8 rounded-2xl border border-[#b8bfb3]/60 bg-white/70 p-6">
                            <div className="flex items-center gap-2">
                                <Smartphone className="h-5 w-5 text-[#4a6b5c]" />
                                <h2 className="text-lg font-semibold text-[#2f453b]">Steps in the mobile app (Android / iOS)</h2>
                            </div>
                            <ol className="mt-4 space-y-3 text-sm leading-6 text-[#607066]">
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b5c] text-xs font-bold text-white">1</span>
                                    <span>Open the <strong className="text-[#2f453b]">MyManasa</strong> app (<code className="rounded bg-[#e8ebe5] px-1.5 py-0.5 text-xs">com.mtsoftware.mymanasa</code>)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b5c] text-xs font-bold text-white">2</span>
                                    <span>Go to <strong className="text-[#2f453b]">Settings</strong> (from the bottom navigation)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b5c] text-xs font-bold text-white">3</span>
                                    <span>Scroll to the very bottom of the screen</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b5c] text-xs font-bold text-white">4</span>
                                    <span>Tap the red card <strong className="text-[#2f453b]">Delete Account</strong></span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b5c] text-xs font-bold text-white">5</span>
                                    <span>A dialog will open: <em className="text-[#2f453b]">"Delete account - This is permanent. You won't be able to sign in with this account again, and this email cannot be used to create a new account."</em></span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a6b5c] text-xs font-bold text-white">6</span>
                                    <span>Tap <strong className="text-[#2f453b]">Delete account</strong> to confirm. The app will delete your account, log you out, and redirect to Login. You will not be able to sign in again with the same email.</span>
                                </li>
                            </ol>
                        </div>

                        {/* What gets deleted */}
                        <div className="mt-6 rounded-2xl border border-[#b8bfb3]/60 bg-white/70 p-6">
                            <div className="flex items-center gap-2">
                                <Database className="h-5 w-5 text-[#4a6b5c]" />
                                <h2 className="text-lg font-semibold text-[#2f453b]">What gets deleted?</h2>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-[#607066]">
                                Account, profile, mood entries, safety plans and self-care goals.
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#607066]">
                                Deletion is immediate in the app and permanently purged on our backend within <strong className="text-[#2f453b]">30 days</strong>.
                            </p>
                        </div>

                        {/* Important */}
                        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
                            <div className="flex gap-3">
                                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                                <div>
                                    <h2 className="text-base font-semibold text-amber-800">Important</h2>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-800/80">
                                        <li>
                                            <strong>Settings &gt; Reset App Data</strong> ONLY deletes your data but NOT your account. Do not use it if you want to delete your account.
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <LogOut className="h-3.5 w-3.5" />
                                            Uninstalling the app does NOT delete your account.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* No access */}
                        <div className="mt-6 rounded-2xl border border-[#b8bfb3]/60 bg-[#f7f8f5]/80 p-6">
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-[#4a6b5c]" />
                                <h2 className="text-lg font-semibold text-[#2f453b]">No access to the app?</h2>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-[#607066]">
                                Request deletion by email. Send an email from your registered address to:
                            </p>
                            <p className="mt-2">
                                <a
                                    href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20MyManasa%20Account`}
                                    className="break-all text-lg font-bold text-[#4a6b5c] underline-offset-4 hover:underline"
                                >
                                    {SUPPORT_EMAIL}
                                </a>
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#607066]">
                                with subject <strong className="text-[#2f453b]">"Delete MyManasa Account"</strong>. We will process it within <strong className="text-[#2f453b]">72 hours</strong>.
                            </p>
                            <Button asChild className="mt-4 rounded-full bg-[#4a6b5c] text-white hover:bg-[#3d5a4d]">
                                <a href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20MyManasa%20Account&body=Hello%20MyManasa%20team%2C%0A%0APlease%20delete%20my%20account%20and%20all%20associated%20data.%0A%0ARegistered%20email%3A%20%0AFull%20name%3A%20%0A%0AThank%20you.`}>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email us to delete your account
                                </a>
                            </Button>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2 text-sm">
                            <Link to="/privacy" className="font-semibold text-[#4a6b5c] underline-offset-4 hover:underline">
                                Privacy Policy
                            </Link>
                            <span className="text-[#b8bfb3]">·</span>
                            <Link to="/support" className="font-semibold text-[#4a6b5c] underline-offset-4 hover:underline">
                                Contact support
                            </Link>
                            <span className="text-[#b8bfb3]">·</span>
                            <Link to="/" className="font-semibold text-[#4a6b5c] underline-offset-4 hover:underline">
                                Home
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
