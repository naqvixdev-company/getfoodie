import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Features from '@/sections/Features';
import Footor from '@/sections/Footor';
import GetApp from '@/sections/GetApp';
import Hero from '@/sections/Hero';
import VideoSection from '@/sections/videoSection';
import WhyUs from '@/sections/WhyChoseUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Features/>
      <GetApp/>
      <Contact/>
      <Footor/>
    </>
  );
}
