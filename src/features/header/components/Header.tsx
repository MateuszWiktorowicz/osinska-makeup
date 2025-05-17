"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import ContactButton from "@/features/common/buttons/ContactButton";
import Logo from "@/assets/icons/Logo";
import NavItem from "./NavItem";
import { navigation } from "../navigation.config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="p-3">
          <Logo
            height="88"
            width="90"
            className="text-primary hover:text-primary-200 min-w-[90px] min-h-[88px]"
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => {
            return (
              <NavItem
                label={t(item.translationKey)}
                href={item.translationHref}
                className="hover:text-primary"
              />
            );
          })}
        </nav>

        <ContactButton />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 space-y-2">
            {navigation.map((item) => {
              return (
                <NavItem
                  label={t(item.translationKey)}
                  href={item.translationHref}
                  className="hover:text-primary"
                />
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
