"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState<null | "mountains" | "volcanoes">(null);

  return (
    <nav className="flex items-center justify-between py-[20px] px-[100px] relative ">
      <Link className="text-[40px] z-[11]" href="/">Peakly</Link>

      <ul className="flex gap-[10px] text-[20px] z-[11]">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>

        <li
          onMouseEnter={() => setOpen("mountains")}
          onFocus={() => setOpen("mountains")}
          >
          <Link href="/mountains" className="block">Mountains</Link>
          <div
            className={[
              "absolute bg-black transition-all duration-500 ease-out w-screen left-0",
              "flex gap-[300px] items-center pl-[29%] pt-[20px] pb-[50px]",
              open === "mountains"
              ? "translate-y-1 opacity-100 pointer-events-auto"
              : "-translate-y-6 opacity-0 pointer-events-none",
            ].join(" ")}
              onMouseLeave={() => setOpen(null)}
            >
              <ul className="space-y-2"
              >
                <li><Link href="/mountains">Overview</Link></li>
                <li><Link href="/mountains/search">Search</Link></li>
                <li><Link href="/mountains/climbers">Climbers</Link></li>
              </ul>

              <img className="z-[11]" src="/favicon.ico" alt="" />
              <div className="black-block"></div>
          </div>
        </li>

        <li
          onMouseEnter={() => setOpen("volcanoes")}
          onMouseLeave={() => setOpen(null)}
          onFocus={() => setOpen("volcanoes")}
          onBlur={() => setOpen(null)}
        >
          <Link href="/volcanoes" className="block">Volcanoes</Link>
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
      <div className="black-block"></div>
    </nav>
  );
}
