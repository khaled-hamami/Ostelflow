import Link from "next/link"
import Logo from "./logo"

import Sidebar from "./sidebar"
export default function Navbar() {
  return (
    <header className=" hidden md:flex w-full py-4  flex-wrap items-center justify-between px-32 absolute bg-[#ffffff33]  ">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-evenly w-1/2 ">
        <Link href="/" className="font-bold text-2xl">
          Destinations
        </Link>
        <Link href="/" className="font-bold text-2xl">
          Deals
        </Link>
        <Link href="/" className="font-bold text-2xl">
          Explore
        </Link>
        <Link href="/" className="font-bold text-2xl">
          Resources
        </Link>
        <Sidebar />
      </div>
    </header>
  )
}
