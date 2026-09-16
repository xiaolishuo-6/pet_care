import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Pricing } from "@/components/pricing";
import { Spaces } from "@/components/spaces";
import { Process } from "@/components/process";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { RevealEffects } from "@/components/reveal-effects";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Pricing />
        <Spaces />
        <Process />
        <Location />
        <Contact />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
