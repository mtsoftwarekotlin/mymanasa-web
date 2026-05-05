import { Link } from "react-router-dom";
import { ArrowLeft, XCircle } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4">
      <BrandHeader />

      <section className="mx-auto flex w-full max-w-md flex-col pb-16 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="border-[#b8bfb3]/70 bg-white/85 text-center shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                <XCircle className="h-9 w-9" />
              </div>

              <h1 className="text-3xl font-bold text-[#2f453b]">
                Payment canceled
              </h1>

              <p className="mt-4 text-sm leading-6 text-[#607066]">
                Your payment was not completed. You can return and try again
                whenever you are ready.
              </p>

              <Button
                asChild
                className="mt-7 h-12 w-full rounded-full bg-[#4a6b5c] text-base text-white shadow-lg hover:bg-[#3d5a4d]"
              >
                <Link to="/create-account">
                  Try again
                </Link>
              </Button>

              <Link
                to="/"
                className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-[#4a6b5c] hover:text-[#2f453b]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}