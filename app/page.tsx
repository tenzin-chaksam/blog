"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const AboutContent = dynamic(() => import("./content/ecmascript-2025.mdx"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <p>
      I will be posting here soon. Meanwhile check out my{" "}
      <Link href="about">bio</Link>.
    </p>
    // <main className="prose dark:prose-invert mx-auto p-6">
    //   <AboutContent />
    // </main>
  );
}
