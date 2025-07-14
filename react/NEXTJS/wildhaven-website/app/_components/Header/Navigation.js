import Link from "next/link";
const linksStyle = "hover:text-accent-400 transition-colors";

function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li className={linksStyle}>
          <Link href="/cabins ">Cabins</Link>
        </li>

        <li className={linksStyle}>
          <Link href="/about ">About</Link>
        </li>
        <li className={linksStyle}>
          <Link href="/account ">Guest area</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
