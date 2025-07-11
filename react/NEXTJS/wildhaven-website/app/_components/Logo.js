import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" alt="Logo" width={60} height={60} />
      <span className="text-xl font-semibold text-primary-100">Wildhaven</span>
    </Link>
  );
}

export default Logo;
