import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex">
      <Link href="/">Peakly</Link>
      <ul className="flex">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <div>
          <li><Link href="/mountains">Mountains</Link></li>
          <ul>
            <li><Link href="/mountains">Mountains</Link></li>
            <li><Link href="">Search</Link></li>
            <li><Link href="">Climbers</Link></li>
          </ul>
        </div>
        <div>
          <li><Link href="/volcanoes">Volcanoes</Link></li>
          <ul>
            <li><Link href="/volcanoes">Volcanoes</Link></li>
            <li><Link href="">Search</Link></li>
            <li><Link href="">Climbers</Link></li>
          </ul>
        </div>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
