import Image from "next/image";
import Planets from "@/components/planets"

export default function Home() {
  return (
    <main className="max-w-screen max-h-screen overflow-hidden">
      <Planets/>
    </main>
  );
}
