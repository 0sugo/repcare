"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/lib/utils";
import logo from "@/app/images/logo.svg";
import hero from "@/app/images/hero.png";
import { FaAngleDoubleDown, FaArrowDown, FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
const components = [
  {
    title: "Home",
    href: "/",
    description:
      "Home page",
  },
  {
    title: "Treatment cartegories",
    href: "/treatment cartegories",
    description:
      "Treatment cartegories",
  },
  {
    title: "Patient Journey",
    href: "/patient journey",
    description:
      "Patient Journey.",
  },
  {
    title: "About",
    href: "/about",
    description: "About page.",
  },
  {
    title: "Contact us",
    href: "/contact us",
    description: "Contact us.",
  }
];

export function NavigationBarMd() {
  return (
    <nav className="">
      <NavigationMenu>
        <NavigationMenuList>
          {components.map((component, index) => (
            <NavigationMenuItem key={component.href}  >
              <Link href={component.href} passHref >
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex-nowrap bg-inherit text-[#170700] hover:bg-inherit hover:underline hover:text-[#2c2222]`}>
                  {component.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

    </nav>

  )
};

export function NavigationBarSm() {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuTrigger>
          <button className="p-2">
            <Image
              src="/images/menu.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuViewport>
            <NavigationMenuList>
              {components.map((component) => (
                <NavigationMenuItem key={component.href}>
                  <Link href={component.href} passHref>
                    <NavigationMenuLink>
                      {component.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenuViewport>
        </NavigationMenuContent>
      </NavigationMenu>
    </nav>
  )
}

export function HeroSection() {
  return (
    <section className="w-[90%]">
      <div className="grid grid-cols-2">

        <div className="flex flex-col justify-center px-12">
          <h1 className="text-4xl md:text-5xl font-bold flex flex-col gap-4">Empowering Reproductive Care Every Step of the Way</h1>

          <div className="mt-10 text-lg">
            <p className="">Explore personalized care and expert support for your sexual & reproductive health, with guidance you can trust and compassion every step of the way.</p>
            <div className="flex gap-2">
              <button className="bg-[#6b52b5] text-white text-sm rounded-full p-3 mt-10 flex items-center gap-4">Book appointment<span className="bg-white rounded-full text-[#6b52b5] p-2"><FaArrowRight /></span></button>
              <button className="text-[#6b52b5] bg-white text-sm rounded-full p-3 mt-10 flex items-center gap-4 border-2 border-[#DBCF8]"><span className="text-white rounded-full bg-[#6b52b5] p-2"><FaRegLightbulb /></span>Learn more</button>
            </div>
          </div>

        </div>

        <div className="flex justify-end ">
          <div className="border-2 p-2 border-[#ff788e] rounded-full">
            <div className="bg-[#9674ff] p-8 rounded-full flex justify-end ">
              <Image src={hero} alt="Hero" width={400} height={400} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative  "><FaAngleDoubleDown className="absolute size-7 text-[#7428ea] animate-bounce" /></div>
    </section>
  )
}

export function PatientJourneySection() {
  return(
    <section>

    </section>
  );

}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-4">
      <header className="flex pt-10 w-[90%] justify-between items-center">

        <div className="flex items-center gap-16">
          <Image src={logo} alt="Logo" className="h-20 w-20 bg-white rounded-full p-1" />
          <NavigationBarMd className="text-xl" />
        </div>

        <div>
          <span className="bg-[#6b52b5] font-medium text-white rounded-3xl text-sm p-3">Book appointment</span>
        </div>
      </header>

      <HeroSection />



    </main>
  );
}
