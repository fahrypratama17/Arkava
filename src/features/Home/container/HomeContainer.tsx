import Hero from "@/features/Home/components/Hero";
import Roadmap from "@/features/Home/components/Roadmap";

const HomeContainer = () => {
  return (
    <div className="mx-auto w-[95%]">
      <Hero />
      <Roadmap />
    </div>
  );
};

export default HomeContainer;
