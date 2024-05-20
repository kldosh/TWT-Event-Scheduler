import Image from "next/image";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import React from "react";

export default function Home() {
  // Playground
  // return (
  //     <div className="h-screen w-screen bg-white flex justify-center items-center">
  //       <Card src="/tulip-logo.png" title="Tulip" description="Its Tulip Time" dates={["09/09/2024", "09/09/2024"]}></Card>
  //     </div>
  // )

  return (
      <Hero></Hero>
  );
}
