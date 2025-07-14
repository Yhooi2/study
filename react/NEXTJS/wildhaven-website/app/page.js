import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={90}
        className="object-cover object-top"
        alt="Montains and forests whith two cabins"
      />
      <div className="relative z-10 text-center mt-24">
        <h1 className="text-7xl text-primary-50 tracking-tight font-normal mb-10">
          Welcome to paradise
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg"
        >
          Explore luxery cabins
        </Link>
      </div>
    </>
  );
}
