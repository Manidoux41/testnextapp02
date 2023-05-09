/* eslint-disable @next/next/no-img-element */
import React from "react";
import getAllApparts from "@/lib/getAllApparts";

type Params = {
  params: {
    appartId: string;
  };
};

const AppartOnly = async ({ params: { appartId } }: Params) => {
  const appartsData: Promise<Appart[]> = getAllApparts();
  const apparts: Appart[] = await appartsData;

  const appart = apparts.find((item) => item.id === appartId);

  if (!appart) throw new Error("Problème appart");

  const content = (
    <div className="w-full h-full py-5">
      <div className="w-full h-[255px] md:h-[415px] rounded-xl md:rounded-3xl overflow-hidden ">
        <img
          src={appart.pictures[1]}
          alt={appart.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return content;
};

export default AppartOnly;
