import Discover from "./Hero/Discover";
import Hero from "./Hero/Hero";
import Story from "./Hero/Story";

export default function About() {
    return (
      //className="flex min-h-screen flex-col items-center justify-between p-24"
        <div>
          <Hero />
          <Discover />
          <Story />
        </div>
    )
  }