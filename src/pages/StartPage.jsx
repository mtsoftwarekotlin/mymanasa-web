import { Link } from "react-router-dom";
import { ArrowRight, LogIn } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";

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
              Create and activate your MyManasa account
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#607066] md:text-lg">
              Create your account online and complete the payment to activate
              access. After activation, you can sign in to the mobile app with the
              same email and password.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                  asChild
                  className="h-12 rounded-full bg-[#4a6b5c] px-8 text-base text-white shadow-lg hover:bg-[#3d5a4d]"
              >
                <Link to="/create-account">
                  Create account
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

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#6f7f73]">
              If you already created an account but did not complete payment, use
              “Complete payment” to continue your activation.
            </p>
          </motion.div>
        </section>
      </main>
  );
}