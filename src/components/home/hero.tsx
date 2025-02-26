import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/home/hero-image";

export const Hero = () => {
  return (
    <section id="#" className=" rounded-lg p-4 w-full">
      <div className="flex w-full justify-center items-center flex-col gap-5 md:flex-row">
        <div className=" w-full transition-all">
          <h3 className="text-sm mb-4">Une p&apos;tite pause café☕?</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold">
            Wake Up & Brunch – L’adresse parfaite pour se régaler
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Des saveurs gourmandes, du bon café et une atmosphère inspirante.
          </p>
          <Button className="mt-8">🍽️ Explorer notre menu</Button>
        </div>
        {/* image section */}
        <div className="w-full min-h-[70vh] flex items-center justify-center relative bg-secondary rounded-lg overflow-hidden">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
