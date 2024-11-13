import { Suspense } from "react";
import FeaturedProducts from "./_components/home/FeaturedProducts";
import Hero from "./_components/home/Hero";
import LoadingContainer from "./_components/global/LoadingContainer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
