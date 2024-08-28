import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonial";
import { FeatureProduct } from "./components/FeatureProduct";
import { Faq } from "./components/Faq";
import { useTitle } from "../../components";

export const HomePage = () => {
    useTitle("Home");
  return (
    <main>
        <Hero />
        <FeatureProduct />
        <Testimonial />
        <Faq />
    </main>
  )
}
