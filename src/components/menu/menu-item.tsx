"use client"

import type { MenuItem as MenuItemType } from "@/constants/menu"
import Image from "next/image"
import { motion } from "framer-motion"

interface MenuItemProps {
  items: MenuItemType[]
}

export const MenuItem = ({ items }: MenuItemProps) => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 transition-all duration-500"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    initial="hidden"
    animate="show"
  >
    {items.map((item, i) => (
      <motion.div
        key={i}
        className="flex flex-col items-center p-2 border border-input transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-36 md:h-48 aspect-square">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
        </div>
        <div className="mt-1 font-dancing_Script">
          <p className="font-bold text-lg text-primary">{item.name}</p>
          <p className="text-base">{item.price} FCFA</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
)

