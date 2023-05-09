'use client';
import { useState } from 'react';

type PictureProps = {
  pictures: string[];
  title: string;
};

export default function Carousel({ pictures, title }: PictureProps) {

  const [currentPicture, setCurrentPicture] = useState(0);
  console.log(pictures.length);

  return (
    <div className="w-full h-[255px] md:h-[415px] rounded-xl md:rounded-3xl overflow-hidden ">
      <img
        src={pictures[currentPicture]}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
