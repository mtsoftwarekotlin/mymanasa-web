import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
} from "lucide-react";
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordHasValue = form.password.length > 0;
  const confirmPasswordHasValue = form.confirmPassword.length > 0;

  const passwordsDoNotMatch =
      passwordHasValue &&
      confirmPasswordHasValue &&
      form.password !== form.confirmPassword;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
    setAccountExists(false);
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
                  Fill in your details below. You'll be taken to a secure payment page to complete
                  your activation and start using the app.
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
                        It looks like you've already started your registration. Sign in below to complete
                        your payment and activate your access — you're almost there!
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

                    <div className="relative">
                      <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Create a password"
                          className="h-11 border-[#b8bfb3] bg-white pr-12"
                          autoComplete="new-password"
                      />

                      <button
                          type="button"
                          onClick={() => setShowPassword((current) => !current)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#607066] hover:text-[#2f453b]"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                      >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                        ) : (
                            <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    {passwordHasValue && form.password.length < 6 && (
                        <p className="text-xs text-red-600">
                          Password must have at least 6 characters.
                        </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-[#2f453b]">
                      Confirm password
                    </Label>

                    <div className="relative">
                      <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={form.confirmPassword}
                          onChange={handleChange}
                          placeholder="Repeat your password"
                          className={`h-11 bg-white pr-12 ${
                              passwordsDoNotMatch
                                  ? "border-red-400 focus-visible:ring-red-400"
                                  : "border-[#b8bfb3]"
                          }`}
                          autoComplete="new-password"
                      />

                      <button
                          type="button"
                          onClick={() =>
                              setShowConfirmPassword((current) => !current)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#607066] hover:text-[#2f453b]"
                          aria-label={
                            showConfirmPassword
                                ? "Hide confirm password"
                                : "Show confirm password"
                          }
                      >
                        {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                        ) : (
                            <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    {passwordsDoNotMatch && (
                        <p className="text-xs text-red-600">
                          Passwords do not match.
                        </p>
                    )}

                    {!passwordsDoNotMatch &&
                        passwordHasValue &&
                        confirmPasswordHasValue && (
                            <p className="text-xs text-[#4a6b5c]">
                              Passwords match.
                            </p>
                        )}
                  </div>

                  <Button
                      type="submit"
                      disabled={isLoading || passwordsDoNotMatch}
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
                    Your account information is saved securely. You can always come back later to
                    complete your payment.
                  </p>

                  <p className="text-center text-sm text-[#607066]">
                    Already registered?{" "}
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