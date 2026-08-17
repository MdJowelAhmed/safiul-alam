import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { Expertise } from "@/components/sections/Expertise";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Tracking } from "@/components/sections/Tracking";
import { Automation } from "@/components/sections/Automation";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <Expertise />
      <About />
      <CaseStudies />
      <Tracking />
      <Automation />
      <Experience />
      <Skills />
      <Certifications />
      <FAQ />
      <ContactCTA />
    </>
  );
}
