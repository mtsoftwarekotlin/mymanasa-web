import { Link } from "react-router-dom";
import { ArrowRight, LogIn, Brain, Heart, Wind, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    label: "Track your mood",
    description: "Log how you feel each day and see your patterns over time.",
  },
  {
    icon: Wind,
    label: "Guided exercises",
    description: "Breathing, grounding, and relaxation techniques — anytime you need them.",
  },
  {
    icon: Heart,
    label: "Learn & grow",
    description: "Psychoeducational content on anxiety, stress, sleep, and more.",
  },
  {
    icon: ShieldCheck,
    label: "Your safety plan",
    description: "Build a personal safety plan and access crisis resources when it matters most.",
  },
];

export default function StartPage() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4 flex flex-col">
        <BrandHeader />

        <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pb-16">
          <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-center"
          >
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#2f453b] md:text-6xl">
              Your mental wellness companion
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#607066] md:text-lg">
              MyManasa is a mobile app designed to support your emotional wellbeing — helping you understand your moods, manage stress, and build healthy habits, one day at a time.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 text-left sm:grid-cols-4 max-w-3xl mx-auto">
              {features.map(({ icon: Icon, label, description }) => (
                  <div
                      key={label}
                      className="rounded-2xl border border-[#b8bfb3]/60 bg-white/60 p-4 backdrop-blur-sm"
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#4a6b5c]/10 text-[#4a6b5c]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold text-[#2f453b]">{label}</p>
                    <p className="mt-1 text-xs leading-5 text-[#607066]">{description}</p>
                  </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-[#6f7f73]">
              To access the app, you need an active account. Create yours below — it only takes a minute.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                  asChild
                  className="h-12 rounded-full bg-[#4a6b5c] px-8 text-base text-white shadow-lg hover:bg-[#3d5a4d]"
              >
                <Link to="/create-account">
                  Create my account
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>

              <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[#4a6b5c]/40 bg-white/70 px-8 text-base text-[#4a6b5c] shadow-sm hover:bg-white"
              >
                <Link to="/complete-payment">
                  Complete payment
                  <LogIn className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#6f7f73]">
              Already registered but didn't finish the payment?{" "}
              Use <strong className="text-[#4a6b5c]">Complete payment</strong> to pick up right where you left off.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6f7f73]">
              Need help?{" "}
              <Link
                  to="/support"
                  className="font-semibold text-[#4a6b5c] underline-offset-4 hover:underline"
              >
                Contact support
              </Link>
              {" · "}
              <Link
                  to="/privacy"
                  className="font-semibold text-[#4a6b5c] underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </section>
      </main>
  );
}