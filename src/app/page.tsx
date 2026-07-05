import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ClassesSection } from "@/components/ClassesSection";
import { CoreValuesSection } from "@/components/CoreValuesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsSection } from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <CoreValuesSection />
      <TestimonialsSection />
      <NewsSection />
      {/* Extra spacing for footer CTA overlap */}
      <div className="h-20" />
    </>
  );
}
