import { About } from "@/components/about/about";
import { Hero } from "@/components/home/hero";
import { Menu } from "@/components/menu/menu";
import React from "react";

const HomePage = () => {
  return (
    <main className="p-4 md:p-6 max-w-7xl m-auto">
      <Hero />
      <About />
      <Menu/>
    </main>
  );
};

export default HomePage;
