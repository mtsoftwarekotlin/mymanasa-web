import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, LockKeyhole } from "lucide-react";
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
import { createCheckoutSession } from "@/services/checkout.service";

export default function CreateAccountPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [accountExists, setAccountExists] = useState(false);
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
    setAccountExists(false);

    if (!form.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must have at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);

      const data = await createCheckoutSession({
        fullName: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      window.location.href = data.checkoutUrl;
    } catch (err) {
      if (err.code === "ACCOUNT_EXISTS") {
        setAccountExists(true);
        setError(
            "This email already has an account or an incomplete registration."
        );
      } else {
        setError(err.message || "Something went wrong. Please try again.");
      }

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
                  <LockKeyhole className="h-6 w-6" />
                </div>

                <CardTitle className="text-2xl text-[#2f453b]">
                  Create your account
                </CardTitle>

                <CardDescription className="text-[#607066]">
                  Your account will be created first. Access is activated only
                  after payment is completed.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                      <Alert className="border-red-200 bg-red-50 text-red-700">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                  )}

                  {accountExists && (
                      <div className="rounded-2xl border border-[#b8bfb3]/70 bg-white/70 p-4 text-sm leading-6 text-[#607066]">
                        If you already started your registration, sign in to
                        continue the payment and activate your account.
                        <Button
                            asChild
                            className="mt-4 h-11 w-full rounded-full bg-[#4a6b5c] text-white hover:bg-[#3d5a4d]"
                        >
                          <Link to="/complete-payment">Complete payment</Link>
                        </Button>
                      </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[#2f453b]">
                      Full name
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="h-11 border-[#b8bfb3] bg-white"
                        autoComplete="name"
                    />
                  </div>

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
                        placeholder="Create a password"
                        className="h-11 border-[#b8bfb3] bg-white"
                        autoComplete="new-password"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-[#2f453b]">
                      Confirm password
                    </Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Repeat your password"
                        className="h-11 border-[#b8bfb3] bg-white"
                        autoComplete="new-password"
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
                          Redirecting...
                        </>
                    ) : (
                        "Create account and continue to payment"
                    )}
                  </Button>

                  <p className="text-center text-xs leading-5 text-[#6f7f73]">
                    If payment is not completed, your account will remain
                    incomplete until you return and complete activation.
                  </p>

                  <p className="text-center text-sm text-[#607066]">
                    Already created an account?{" "}
                    <Link
                        to="/complete-payment"
                        className="font-medium text-[#4a6b5c] hover:text-[#2f453b]"
                    >
                      Complete payment
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