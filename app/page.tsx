import { Header } from "@/components/nav/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Pillars } from "@/components/sections/Pillars";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import { Problem2026 } from "@/components/sections/Problem2026";
import { Differentiation } from "@/components/sections/Differentiation";
import { ProgramComponents } from "@/components/sections/ProgramComponents";
import { Process } from "@/components/sections/Process";
import { CohortDetails } from "@/components/sections/CohortDetails";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { Audit } from "@/components/sections/Audit";
import { Inclusions } from "@/components/sections/Inclusions";
import { Testimonials } from "@/components/sections/Testimonials";
import { Founder } from "@/components/sections/Founder";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <ProgramOverview />
        <Problem2026 />
        <Differentiation />
        <ProgramComponents />
        <Process />
        <CohortDetails />
        <ToolsShowcase />
        <Audit />
        <Inclusions />
        <Testimonials />
        <Founder />
        <Pricing />
        <Guarantee />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
