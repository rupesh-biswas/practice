import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  img: StaticImageData;
  alt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src={props.img}
            alt={props.alt}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
        </div>
        <div className="flex h-full items-center justify-center">
          <div className="text-6xl text-white">{props.title}</div>
        </div>
      </div>
    </div>
  );
}
