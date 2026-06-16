import Hero from "@/features/Home/components/Hero";
import Roadmap from "@/features/Home/components/Roadmap";
import PilihJalur from "@/features/Home/components/PilihJalur";
import CTA from "@/features/Home/components/CTA";

const HomeContainer = () => {
  return (
    <div className="mx-auto w-[95%]">
      <Hero />
      <Roadmap />
      <PilihJalur />
      <CTA />
    </div>
  );
};

export default HomeContainer;
