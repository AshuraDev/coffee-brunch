import { MenuList } from "@/components/menu/menu-liste";

export const Menu = () => {
  return (
    <section id="menu" className="pt-16">
      <h2 className="heading_style">Notre Menu</h2>
      <div className="mt-8">
        <MenuList />
      </div>
    </section>
  );
};
