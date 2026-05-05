import { Link } from "react-router-dom";

import BrandHeader from "@/components/BrandHeader";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e8ebe5] via-[#d4d9cf] to-[#c9cfc4] px-4">
      <BrandHeader />

      <section className="mx-auto flex max-w-md flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-bold text-[#2f453b]">404</h1>

        <p className="mt-4 text-[#607066]">
            Hmm, we couldn't find that page. It may have been moved or the link might be wrong.
        </p>

        <Button
          asChild
          className="mt-7 rounded-full bg-[#4a6b5c] px-8 text-white hover:bg-[#3d5a4d]"
        >
          <Link to="/">Go back home</Link>
        </Button>
      </section>
    </main>
  );
}