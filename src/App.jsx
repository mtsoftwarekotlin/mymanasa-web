import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "@/pages/StartPage";
import CreateAccountPage from "@/pages/CreateAccountPage";
import CompletePaymentPage from "@/pages/CompletePaymentPage";
import CheckoutSuccessPage from "@/pages/CheckoutSuccessPage";
import CheckoutCancelPage from "@/pages/CheckoutCancelPage";
import SupportPage from "@/pages/SupportPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/create-account" element={<CreateAccountPage />} />
                <Route path="/complete-payment" element={<CompletePaymentPage />} />
                <Route path="/success" element={<CheckoutSuccessPage />} />
                <Route path="/cancel" element={<CheckoutCancelPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
            </Routes>
        </BrowserRouter>
    );
}