"use client"
import React from 'react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { BiSolidHelpCircle } from 'react-icons/bi'

const NavBar = React.memo(() => {
  const links = [
    { href: "#about", label: "About", icon: <FaHome className="mt-[3px] max-sm:mt-[1px]" /> },
    { href: "#projects", label: "Works", icon: <BsFillPeopleFill className="mt-[4px] max-sm:mt-[2px]" /> },
    { href: "#contact", label: "Contact", icon: <BiSolidHelpCircle className="mt-[4px] max-sm:mt-[2px]" /> },
  ];

  return (
    <div className="flex justify-center items-center smooth-animation w-full mb-[100px] z-10">
      <nav className="w-full h-[100px] flex justify-between items-center px-8 py-4 bg-[#020202] smooth-animation">
        <Link href="/">
          <h3 className="text-lg font-semibold text-white smooth-animation select-none max-sm:text-sm">
            Ean Yu
          </h3>
        </Link>
        <div className="flex gap-x-6">
          {links.map((link) => (
            <Link key={link.href} className="text-base font-medium text-white smooth-animation select-none flex gap-x-3 max-sm:text-xs" href={link.href}>
              {link.label}
              {link.icon}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
