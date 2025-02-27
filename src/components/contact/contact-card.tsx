"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactCard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary font-dancing_Script">
                Wake Up & Brunch
              </h3>
              <p className="text-gray-500 text-sm">
                Notre café chaleureux et accueillant est l&apos;endroit idéal
                pour déguster une délicieuse tasse de café, savourer des
                pâtisseries fraîchement préparées et passer du temps entre amis.
                Nous nous approvisionnons en ingrédients locaux et préparons
                tout avec soin. Que vous passiez pour un petit déjeuner rapide
                ou que vous vous installiez pour un déjeuner tranquille, nous
                sommes là pour rendre votre visite spéciale.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium font-dancing_Script">Adresse</h4>
                  <p className="text-sm text-gray-500">
                    123 Rue du Café, Quartier des Cafés, Ville, 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium font-dancing_Script">Téléphone</h4>
                  <p className="text-sm text-gray-500">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium font-dancing_Script">Email</h4>
                  <p className="text-sm text-gray-500">bonjour@lecoincosy.fr</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium font-dancing_Script">Horaires</h4>
                  <p className="text-sm text-gray-500">
                    Lundi - Vendredi : 7h - 20h
                  </p>
                  <p className="text-sm text-gray-500">
                    Samedi - Dimanche : 8h - 21h
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium font-dancing_Script">Suivez-nous</h4>
              <div className="flex gap-4">
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
        </CardContent>
      </Card>
      <div className="overflow-hidden rounded-lg border bg-background shadow">
        {isMounted && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15861.062282983696!2d2.373772187056216!3d6.359663023434685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKAYA%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1740683362010!5m2!1sfr!2sbj"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Le Wake Up & Brunch"
            className="aspect-video h-full w-full"
          ></iframe>
        )}
      </div>
    </div>
  );
};
