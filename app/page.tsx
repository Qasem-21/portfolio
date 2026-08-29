import { Navbar } from "@/features/navbar/navbar";
import { Hero } from "@/features/hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}