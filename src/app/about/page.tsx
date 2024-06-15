import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "SEO description",
};
export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      About page
    </main>
  );
}
