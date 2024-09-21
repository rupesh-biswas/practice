import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        img={performanceImg}
        alt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
}
