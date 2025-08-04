"use client";

import dynamic from "next/dynamic";

const AboutContent = dynamic(() => import("./ecmascript-2025.mdx"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <main className="prose dark:prose-invert mx-auto p-6">
      <AboutContent />
    </main>
  );
}
