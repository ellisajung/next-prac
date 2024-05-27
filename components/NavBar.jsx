"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const path = usePathname();
  console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "💖" : ""}
        </li>
        <li>
          <Link href="/main">Main</Link> {path === "/main" ? "💖" : ""}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
