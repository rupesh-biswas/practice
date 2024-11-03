import Hero from "@/components/hero";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        img={reliabilityImg}
        alt="welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
