import Link from "next/link";
import { cn } from "@/lib/utils";

interface CollapseMenuProps {
  links: {
    label: string;
    href: string;
    isActive: boolean;
  }[];
}

export const CollapseMenu = ({ links }: CollapseMenuProps) => {
  return (
    <div className="w-full h-full p-4 border-t border-input">
      <ul className="flex flex-col items-center gap-y-4 transition-all">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={cn(
              "text-sm text-foreground transition-all font-semibold hover:text-primary",
              link.isActive && "text-primary"
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};
