import Link from "next/link";
import Hero from "@/components/hero";
import Collections from "@/components/collections";

export default function Home() {
  return (
    <main className="font-fontInter">
      <Hero />
      <Collections />
      <Link href="/testing">Next Page</Link>
    </main>
  );
}
