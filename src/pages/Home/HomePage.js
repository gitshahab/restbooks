import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonial";
import { FeatureProduct } from "./components/FeatureProduct";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  return (
    <main>
        <Hero />
        <FeatureProduct />
        <Testimonial />
        <Faq />
    </main>
  )
}
