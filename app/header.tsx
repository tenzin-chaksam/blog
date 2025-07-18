"use client";
import React, { use } from "react";
import Link from "next/link";
import ThemeToggle from "./Toggle";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between">
      {/* Left-aligned item */}
      <div className="text-lg font-bold">
        {pathname != "/" ? (
          <Link
            href="/"
            className="hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 rounded-sm transition-[background-color]"
          >
            Tenzin Chaksam
          </Link>
        ) : (
          <h1>Tenzin Chaksam</h1>
        )}
      </div>

      {/* Right-aligned items */}
      <nav className="flex items-center space-x-6">
        <Link
          href="/about"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        >
          About
        </Link>
        <a
          href="https://x.com/tenzinchaksam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
        >
          <FaXTwitter className="inline-block mr-1" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
