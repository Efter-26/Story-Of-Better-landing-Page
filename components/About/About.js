import Footer from "../Footer/Footer";
import Discover from "./Hero/Discover";
import Founder from "./Hero/Founder";
import Hero from "./Hero/Hero";
import Story from "./Hero/Story";
import VisitUs from "./Hero/VisitUs";
import WhyChooseUs from "./Hero/WhyChooseUs";

export default function About() {
    return (
      //className="flex min-h-screen flex-col items-center justify-between p-24"
        <div>
          <Hero />
          <Discover />
          <Story />
          <WhyChooseUs />
          <VisitUs />
          <Founder />
          <Footer />
        </div>
    )
  }