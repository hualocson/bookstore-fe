import Image from "next/image";

import MainLayout from "@/components/layout/main-layout";

import CategorySection from "@/components/landing-page/category-section";
import FeedbackSection from "@/components/landing-page/feedback-section";
import ProductSection from "@/components/landing-page/product-section";
import ProductSpecialSection from "@/components/landing-page/special-section";

import bg from "@/resources/images/landing/product-bg.svg";

export default function Home() {
  return (
    <MainLayout mainCustomClass="relative">
      <div className="absolute inset-x-0 z-0 h-screen opacity-60 blur-sm">
        <Image
          src={bg}
          alt="Product Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-0">
        <ProductSection />
      </div>

      <CategorySection />

      <div className="bg-grayscale py-20">
        <ProductSpecialSection />
      </div>

      <FeedbackSection />
    </MainLayout>
  );
}
