import { Link } from "react-router-dom";
import { CheckCircle2, ExternalLink, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutSuccessPage() {
  const deepLink = import.meta.env.VITE_APP_DEEP_LINK;
  const appStoreUrl = import.meta.env.VITE_APP_STORE_URL;
  const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL;

  function openApp() {
    if (!deepLink) return;
    window.location.href = deepLink;
  }

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
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#4a6b5c]/10 text-[#4a6b5c]">
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <h1 className="text-3xl font-bold text-[#2f453b]">
                  Your account is ready
                </h1>

                <p className="mt-4 text-sm leading-6 text-[#607066]">
                  Your payment was completed successfully. Please open the
                  MyManasa app on your phone and sign in with the account you
                  created.
                </p>

                {deepLink && (
                    <Button
                        onClick={openApp}
                        className="mt-7 h-12 w-full rounded-full bg-[#4a6b5c] text-base text-white shadow-lg hover:bg-[#3d5a4d]"
                    >
                      <Smartphone className="h-5 w-5" />
                      Open app
                    </Button>
                )}

                {(appStoreUrl || playStoreUrl) && (
                    <div className="mt-5 grid gap-3">
                      {appStoreUrl && (
                          <a
                              href={appStoreUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b8bfb3] bg-white px-4 py-3 text-sm font-medium text-[#4a6b5c] hover:bg-[#f6f7f4]"
                          >
                            App Store
                            <ExternalLink className="h-4 w-4" />
                          </a>
                      )}

                      {playStoreUrl && (
                          <a
                              href={playStoreUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b8bfb3] bg-white px-4 py-3 text-sm font-medium text-[#4a6b5c] hover:bg-[#f6f7f4]"
                          >
                            Google Play
                            <ExternalLink className="h-4 w-4" />
                          </a>
                      )}
                    </div>
                )}

                {!deepLink && !appStoreUrl && !playStoreUrl && (
                    <div className="mt-7 rounded-2xl border border-[#b8bfb3]/70 bg-white/70 px-4 py-4 text-sm leading-6 text-[#607066]">
                      The app is not published yet. When it is available, open
                      MyManasa on your phone and sign in with this same account.
                    </div>
                )}

                <Link
                    to="/"
                    className="mt-6 inline-block text-sm font-medium text-[#4a6b5c] hover:text-[#2f453b]"
                >
                  Back to home
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
  );
}