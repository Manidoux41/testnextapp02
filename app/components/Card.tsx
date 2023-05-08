/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='w-full h-[280px] lg:w-[340px] lg:h-[340px] bg-red-500 fill-slate-600 rounded-md relative'>
        <h2 className='text-white font-semibold text-lg absolute bottom-2 left-2 '>Titre de l'appartement</h2>
    </div>
  )
}

export default Card