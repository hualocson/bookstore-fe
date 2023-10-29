import Image from "next/image";

import MainLayout from "@/components/layout/main-layout";

import CategorySection from "@/components/landing-page/category-section";
import Footer from "@/components/landing-page/footer";
import ProductSection from "@/components/landing-page/product-section";

import bg from "@/resources/images/landing/product-bg.svg";

export default function Home() {
  return (
    <MainLayout>
      <div className="absolute inset-0 -z-10 opacity-60 blur-sm">
        <Image
          src={bg}
          alt="Product Background"
          layout="fill"
          className="object-cover"
        />
      </div>

      <ProductSection />

      <CategorySection />

      <Footer />
    </MainLayout>
  );
}
