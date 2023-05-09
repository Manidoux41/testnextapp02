/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'


type CardProps = {
  appart: {
    id: string,
    cover: string,
    title: string
  }
}

const Card = ({appart}: CardProps) => {
  return (    
        <Link
            href={`/appart/${appart.id}`}
            className='w-full h-[280px] lg:w-[340px] lg:h-[340px] bg-red-500 fill-slate-600 rounded-lg overflow-hidden relative'>
              <img 
              className='w-full h-full object-cover filter brightness-75'
              src={appart.cover} alt="" />
              
              <h2 className='text-white font-medium text-lg absolute bottom-2 left-2 '>{appart.title}</h2>
            </Link>    
  )
}

export default Card;