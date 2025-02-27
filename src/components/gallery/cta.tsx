export const Cta = () => {
  return (
    <div className="pt-16">
      <div className="w-full bg-primary flex items-center justify-center h-[300px] rounded-xl overflow-hidden bg-cta-background bg-no-repeat bg-cover bg-fixed bg-center transition-all relative">
        <div className="absolute inset-0 w-full h-full bg-black/50" />
        <h2 className="text-white font-bold font-dancing_Script text-center text-2xl md:text-3xl lg:text-4xl z-30">
          Laissez-vous tenter par l&apos;ambiance chaleureuse de notre restaurant
          convivial !
        </h2>
      </div>
    </div>
  );
};
