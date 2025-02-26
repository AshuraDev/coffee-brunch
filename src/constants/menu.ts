export interface MenuItem {
  name: string;
  price: string;
  image: string;
}

interface MenuCategory {
  value: string;
  label: string;
  image: string;
  items: MenuItem[];
}

export const MenuList: MenuCategory[] = [
  {
    value: "tab-1",
    label: "Tous les menus",
    image: "/icons/menu.png",
    get items() {
      return MenuList.filter((category) => category.value !== "tab-1").flatMap(
        (category) => category.items
      );
    },
  },
  {
    value: "tab-2",
    label: "Petit-déjeuner",
    image: "/icons/breakfast.png",
    items: [
      { name: "Croissant", price: "3.500", image: "/images/1.jpg" },
      { name: "Pain au chocolat", price: "4.000", image: "/images/2.jpg" },
      { name: "Café noir", price: "2.500", image: "/images/3.jpg" },
    ],
  },
  {
    value: "tab-3",
    label: "Déjeuner",
    image: "/icons/lunch.png",
    items: [
      { name: "Sandwich poulet", price: "7.000", image: "/images/4.jpg" },
      { name: "Burger maison", price: "8.500", image: "/images/5.jpg" },
      { name: "Salade César", price: "6.500", image: "/images/6.jpg" },
    ],
  },
  {
    value: "tab-4",
    label: "Boissons",
    image: "/icons/drinks.png",
    items: [
      { name: "Jus d’orange", price: "4.500", image: "/images/1.jpg" },
      { name: "Smoothie fraise", price: "5.500", image: "/images/2.jpg" },
      { name: "Thé glacé", price: "3.500", image: "/images/3.jpg" },
    ],
  },
  {
    value: "tab-5",
    label: "Desserts",
    image: "/icons/dessert.png",
    items: [
      { name: "Cheesecake", price: "6.000", image: "/images/4.jpg" },
      { name: "Tiramisu", price: "7.000", image: "/images/5.jpg" },
      { name: "Muffin chocolat", price: "4.500", image: "/images/6.jpg" },
    ],
  },
];
