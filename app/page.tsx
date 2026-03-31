import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CareerTimeline from "@/components/CareerTimeline";
import Competencies from "@/components/Competencies";
import SimpleSkills from "@/components/SimpleSkills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <CareerTimeline />
      <Competencies />
      <SimpleSkills />
      <Contact />
    </main>
  );
}
