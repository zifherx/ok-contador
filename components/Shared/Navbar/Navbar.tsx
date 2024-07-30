"use client";

import Image from "next/image";
import { menuNav } from "./dataMenu.data";
import { NavBarItem } from "./components/NavbarItem";
import { BotonResponsive } from "./components/BotonResponsive";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <BotonResponsive />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  className="h-10 w-auto"
                  width={100}
                  height={100}
                  src="/images/logo-ok-bg.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menuNav.map((item) => (
                  <NavBarItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
