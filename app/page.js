"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import BrandIntro from "@/components/intro/BrandIntro";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ProductIntro from "@/components/sections/ProductIntro";
import ProductShowcase from "@/components/product-showcase/ProductShowcase";
import FeatureStory from "@/components/sections/FeatureStory";
import CompanyStory from "@/components/sections/CompanyStory";
import Capabilities from "@/components/sections/Capabilities";
import Metrics from "@/components/sections/Metrics";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/footer/Footer";
import { products } from "@/lib/constants/products";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <SmoothScrollProvider>
      <BrandIntro onComplete={() => setIntroDone(true)} />
      <Navbar />
      <main>
        <Hero introDone={introDone} />
        <ProductIntro />
        <ProductShowcase />
        {products.map((p) => (
          <FeatureStory key={p.id} product={p} />
        ))}
        <CompanyStory />
        <Capabilities />
        <Metrics />
        <FinalCta />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
