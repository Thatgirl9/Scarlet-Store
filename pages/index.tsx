import Link from "next/link";
import Hero from "@/components/hero";
import Collections from "@/components/collections";
import Discount from "@/components/discount";

export default function Home() {
  return (
    <main className="font-fontInter">
      <Hero />
      <Collections />
      <Discount />
      <Link href="/testing">Next Page</Link>
    </main>
  );
}
