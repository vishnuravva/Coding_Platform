import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"

function Header() {
  return (
    <header className="flex justify-between w-full items-center p-4">
      {/* logo starts*/}
      <Link href={"/"}>
        <div className="flex justify-between items-center">
          <Image
            width={125}
            height={125}
            objectFit="cover"
            alt="logo"
            src={"/images/code2.png"}
          />
          <p className="font-bold text-xl sm:text-2xl text-black dark:text-white">CodePark</p>
        </div>
      </Link>
      {/* logo ends*/}

      <div className="flex items-center justify-between">
        <div>
          <ThemeToggler />
        </div>
        <div className="ml-4">
          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <SignInButton afterSignInUrl="/challenges" mode="modal" />
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
