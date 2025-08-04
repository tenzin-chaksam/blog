"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-2xl font-mono m-auto mb-10 text-sm">
      <li>
        <Link href={"/2025/ecmascript-2025"} className="block">
          <span
            className={`flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
                ${false ? "border-t-0" : ""}
                ${true ? "border-b-0" : ""}
              `}
          >
            <span
              className={`py-3 flex grow items-center ${!false ? "ml-14" : ""}`}
            >
              <span className="grow dark:text-gray-100">
                What's new in ECMAScript 2025
              </span>
            </span>
          </span>
        </Link>
      </li>
    </main>
  );
}
