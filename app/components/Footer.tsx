import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='w-full bg-black text-white flex flex-col justify-center items-center py-7 space-y-5'>
        <h1 className='text-4xl font-semibold'>Kasa</h1>
        <p>Copiright 2023</p>
    </footer>
  )
}

export default Footer