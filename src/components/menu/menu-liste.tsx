"use client";
import React, { useState } from "react";
import { MenuList as menus } from "@/constants/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { MenuItem } from "./menu-item";
import { motion, AnimatePresence } from "framer-motion";

export const MenuList = () => {
  const [selectedTab, setSelectedTab] = useState(menus[0].value);
  return (
    <Tabs
      defaultValue="tab-1"
      className="items-center"
      onValueChange={setSelectedTab}
    >
      <TabsList className="text-foreground items-center justify-start h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1 w-full overflow-x-auto no-scrollbar">
        {menus.map((menuCategory) => (
          <TabsTrigger
            key={menuCategory.value}
            value={menuCategory.value}
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <div className="w-full h-full flex items-center flex-col justify-center gap-y-1">
              <Image
                src={menuCategory.image}
                alt={menuCategory.label}
                width={40}
                height={40}
              />
              <span className="text-sm">{menuCategory.label}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {menus.map((menu) => (
            <TabsContent key={menu.value} value={menu.value} className="mt-6">
              <MenuItem items={menu.items} />
            </TabsContent>
          ))}
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
};
