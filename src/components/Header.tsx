"use client";

import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ScheduleButton } from "./ScheduleButton";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) => `
    block px-4 py-2 text-center w-[90%] border-l-[3px]
    transition-colors duration-300
    ${
      pathname === path
        ? "bg-green-100 font-semibold text-green-500 border-green-500"
        : "border-transparent hover:bg-green-100 hover:text-green-500 hover:border-green-500"
    }
    md:w-auto md:px-3 md:py-1 md:border-0 md:bg-transparent 
    md:hover:bg-transparent
    transition-colors duration-300
    ${
      pathname === path
        ? "md:text-green-600 md:font-semibold md:border-b-2 md:border-green-600"
        : "md:hover:text-green-600"
    }
  `;

  // Shared links (show in both mobile + desktop)
  const navLinks = [
    { href: "/web-services", label: "Web Development" },
    { href: "/automation-solutions", label: "Automation Solutions" },
    { href: "/cloud-solutions", label: "Cloud Solutions" },
    { href: "/our-works", label: "Our Works" },
    { href: "/company", label: "Who We Are" },
  ];

  return (
    <section
      className="sticky top-0 z-50
        flex justify-between items-center
        p-4 md:p-7 md:pl-10
        bg-white/30 backdrop-blur-md
        border-b border-green-500
        shadow-sm"
    >
      <Link
        href="/"
        className="relative inline-block text-[2rem] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-1/2 after:bg-green-600"
      >
        Leonexia
      </Link>

      {/* Mobile Nav - Sheet */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button type="button" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="md:hidden"
            autoFocus={false}
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <VisuallyHidden>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Quick links and options go here.
                </SheetDescription>
              </SheetHeader>
            </VisuallyHidden>

            <nav className="mt-[4rem] w-full flex flex-col gap-5 items-center">
              {navLinks.map(({ href, label }) => (
                <SheetClose asChild key={href}>
                  <Link href={href} className={linkClasses(href)}>
                    {label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex md:gap-2 md:items-center">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className={linkClasses(href)}>
            {label}
          </Link>
        ))}
        <ScheduleButton
          className="md:px-4 md:py-2 md:bg-green-700 md:rounded-md md:text-white
    md:hover:bg-white md:hover:text-green-700 md:border md:border-green-700
    transition-colors duration-300"
          withArrow={false}
        >
          Schedule Now
        </ScheduleButton>
      </nav>
    </section>
  );
};
