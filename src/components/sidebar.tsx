import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="border-background">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
          >
            <rect x="0.171875" y="0.0488281" width="20.8843" height="2.92683" fill="black" />
            <rect x="0.171875" y="5.90259" width="20.8843" height="2.92683" fill="black" />
            <rect x="0.171875" y="11.7561" width="20.8843" height="2.92683" fill="black" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="grid gap-4 py-4">
          <Link href="/contact">Contact</Link>
          <Link href="/signin">Sign in</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
