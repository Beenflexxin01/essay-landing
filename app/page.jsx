import Browse from "./components/Browse";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SkilledWriter from "./components/SkilledWriter";
import Testimonials from "./components/Testimonials";

function page() {
  return (
    <div>
      <Hero />
      <SkilledWriter />
      <HowItWorks />
      <Browse />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
