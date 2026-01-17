import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import FeatureCards from "./components/FeatureCards";
import Vision from "./components/Vision";
import JournalyticTimeline from "./components/TimeLine";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full bg-white">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>
          <Cards />
        </div>

        <div className="relative z-0">
          <div className="flex min-h-screen w-full font-poppins pt-16 pb-32">
            <main className="flex w-full flex-col">
              <Menu />
              <Hero />
              <FeatureCards />
              <JournalyticTimeline />
              <Vision />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
