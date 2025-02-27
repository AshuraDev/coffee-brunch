import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-[#212832] text-white py-10 px-2 w-full">
      <div className="max-w-7xl m-auto">
        <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 place-items-center">
          {/* grid 1 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-dancing_Script font-bold text-xl md:text-2xl">
              Contactez-nous
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-center text-sm font-normal gap-1 cursor-pointer">
                <MapPin className="w-4 h-4" />
                Location
              </div>
              <div className="flex items-center justify-center text-sm font-normal gap-1 cursor-pointer">
                <Phone className="w-4 h-4" />
                01 23 45 67 89
              </div>
              <div className="flex items-center justify-center text-sm font-normal gap-1 cursor-pointer">
                <Mail className="w-4 h-4" />
                bonjour@lecoincosy.fr
              </div>
            </div>
          </div>
          {/* grid 2 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-dancing_Script font-bold text-xl md:text-2xl">
              Wake Up & Brunch
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-center justify-center text-sm font-normal gap-1 cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                harum laboriosam! Aperiam laborum ullam vel
              </div>
              <div className="flex items-center justify-center gap-2 text-black">
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* grid 3 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-dancing_Script font-bold text-xl md:text-2xl">
              Horaires
            </h3>
            <div className="mt-2 space-y-2 text-sm font-normal">
              <p>Lundi - Vendredi : 7h - 20h</p>
              <p>Samedi - Dimanche : 8h - 21h</p>
            </div>
          </div>
        </div>

        <hr className="bg-input border-input mt-8" />
        <div className="mt-4 text-sm m-auto text-center ">
          &copy; {new Date().getFullYear()} Donald-Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
