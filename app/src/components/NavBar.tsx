"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState<null | "mountains" | "volcanoes">(null);

  return (
    <nav className="flex items-center gap-8">
      <Link href="/">Peakly</Link>

      <ul className="flex gap-6 w-full">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>

        <li
          className="relative"
          onMouseEnter={() => setOpen("mountains")}
          onMouseLeave={() => setOpen(null)}
          onFocus={() => setOpen("mountains")}
          onBlur={() => setOpen(null)}
        >
          <Link href="/mountains" className="block py-2">Mountains</Link>
          <ul
            className={[
              "absolute left-[-210px] mt-1 w-[1520px] rounded p-2 bg-[#fff] backdrop-blur flex gap-5 justify-center items-center",
              "transition-all duration-500 ease-out",
              open === "mountains" ? "opacity-100 translate-y-[-4px] pointer-events-auto" : "opacity-0 translate-y-[-100px] pointer-events-none",
            ].join(" ")}
          >
            <ul>
              <li><Link href="/mountains">Overview</Link></li>
              <li><Link href="/mountains/search">Search</Link></li>
              <li><Link href="/mountains/climbers">Climbers</Link></li>
            </ul>
            <img className="p-20" src="../favicon.ico" alt="" />
          </ul>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setOpen("volcanoes")}
          onMouseLeave={() => setOpen(null)}
          onFocus={() => setOpen("volcanoes")}
          onBlur={() => setOpen(null)}
        >
          <Link href="/volcanoes" className="block py-2">Volcanoes</Link>
          <ul
            className={[
              "absolute left-0 mt-1 w-44 rounded p-2 backdrop-blur",
              "transition-all duration-200 ease-out",
              open === "volcanoes"
                ? "opacity-100 translate-y-[-4px] pointer-events-auto"
                : "opacity-0 translate-y-[8px] pointer-events-none",
            ].join(" ")}
          >
            <li><Link href="/volcanoes">Overview</Link></li>
            <li><Link href="/volcanoes/search">Search</Link></li>
            <li><Link href="/volcanoes/climbers">Climbers</Link></li>
          </ul>
        </li>

        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
