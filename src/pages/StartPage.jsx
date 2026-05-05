import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
            Create your MyManasa account online
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#607066] md:text-lg">
            Complete your account setup and payment here. Then open the app to
            continue your wellness journey.
          </p>

          <div className="mt-8">
            <Button
              asChild
              className="h-12 rounded-full bg-[#4a6b5c] px-8 text-base text-white shadow-lg hover:bg-[#3d5a4d]"
            >
              <Link to="/create-account">
                Get started
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}