import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "@/pages/StartPage";
import CreateAccountPage from "@/pages/CreateAccountPage";
import CheckoutSuccessPage from "@/pages/CheckoutSuccessPage";
import CheckoutCancelPage from "@/pages/CheckoutCancelPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/success" element={<CheckoutSuccessPage />} />
        <Route path="/cancel" element={<CheckoutCancelPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}