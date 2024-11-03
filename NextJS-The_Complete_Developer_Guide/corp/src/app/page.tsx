import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        img={homeImg}
        alt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
