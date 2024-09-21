import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        img={scaleImg}
        alt="steel factory"
        title="Scale your app to infinity"
      />
    </div>
  );
}
