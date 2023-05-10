import React from "react";
import getAllApparts from "@/lib/getAllApparts";
import Carousel from "./components/Carousel";

type Params = {
  params: {
    appartId: string;
  };
};

export const metadata = {
  title: 'Kasa | homePage',
  description: 'Kasa Home page',
}

export default async function AppartOnly({ params: { appartId } }: Params) {
  const appartsData: Promise<Appart[]> = getAllApparts();
  const apparts: Appart[] = await appartsData;

  const appart = apparts.find((item) => item.id === appartId);

  if (!appart) throw new Error("Problème appart");

  const content = (
    <div className="w-full h-full py-5">
      <Carousel pictures={appart.pictures} title={appart.title} />     
    </div>
  );

  return content;
}
