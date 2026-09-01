import { Navbar } from "@/features/navbar/navbar";
import { Hero } from "@/features/hero/hero";
import { About } from "@/features/about/about";
import { Skills } from "@/features/skills/skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
    </main>
  );
}