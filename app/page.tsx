import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggler } from "@/components/ThemeToggler";
import Why from "@/components/Why";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Landing />
    <Why />
    </>
  );
}
