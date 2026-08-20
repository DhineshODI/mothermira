import { Suspense } from "react";
import Header from "../components/Header";
import ThankYouContent from "./ThankYouContent";

export const metadata = {
  title: "Thank You | Mother Mira",
  description: "We have received your enquiry.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header sec={""} />
      <Suspense fallback={null}>
        <ThankYouContent />
      </Suspense>
    </>
  );
}
