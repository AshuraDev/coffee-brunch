import { AboutImage } from "@/components/about/about-image";

export const About = () => {
  return (
    <section id="a-propos" className="pt-16">
      <h2 className="heading_style">À propos de nous</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
        <AboutImage />
        <div className="w-full">
          <h3 className="mb-4 font-bold text-xl text-primary">
            Wake Up & Brunch
          </h3>
          <p className="text-justify  text-sm md:text-base ">
            Bienvenue au Café Luxe Brunch, où la passion pour le café de qualité
            rencontre l&apos;art du brunch gourmet. Depuis notre ouverture en
            2010, nous nous efforçons de créer une expérience culinaire unique
            dans une ambiance chaleureuse et élégante.
          </p>
          <p className=" mt-2 text-justify text-sm md:text-base">
            Notre équipe de baristas experts et de chefs talentueux travaille
            avec des ingrédients locaux et de saison pour vous offrir des
            saveurs exceptionnelles à chaque visite.
          </p>
        </div>
      </div>
    </section>
  );
};
