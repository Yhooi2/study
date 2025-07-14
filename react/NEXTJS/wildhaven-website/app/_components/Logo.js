import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" alt="Logo" width={60} quality={100} height={60} />
      <span className="text-xl font-semibold text-primary-100">Wildhaven</span>
    </Link>
  );
}

export default Logo;
