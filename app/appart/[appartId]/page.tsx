import React from "react";
import getAllApparts from "@/lib/getAllApparts";
import Carousel from "./components/Carousel";
import Ident from "./components/Ident";

type Params = {
  params: {
    appartId: string;
  };
};

export const metadata = {
  title: "Kasa | Logements",
  description: "Kasa Home page",
};

export default async function AppartOnly({ params: { appartId } }: Params) {
  const appartsData: Promise<Appart[]> = getAllApparts();
  const apparts: Appart[] = await appartsData;

  const appart = apparts.find((item) => item.id === appartId);

  if (!appart) throw new Error("Problème appart");

  const content = (
    <div className="w-full h-full py-5">
      <Carousel pictures={appart.pictures} title={appart.title} />
      <div className="flex flex-col md:flex-row text-red-500 py-7">
        <div className="left">
          <Ident location={appart.location} title={appart.title} />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );

  return content;
}
