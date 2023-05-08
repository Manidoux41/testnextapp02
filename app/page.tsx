/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Banner from './components/Banner'
import getAllApparts from '@/lib/getAllApparts'
import Link from 'next/link'

export default async function Home() {
  const appartsData: Promise<Appart[]> = getAllApparts()
  const apparts = await appartsData
  const content = (
    <>
    <Banner />
      <div className='mt-5 mb-7 p-0 lg:px-7 lg:py-10 bg-transparent lg:bg-blue-200 md:rounded-2xl w-full mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-between items-center'>
        {
          apparts.map((appart) => (
            <Link
            href={`/appart/${appart.id}`}
            key={appart.id}
            className='w-full h-[280px] lg:w-[340px] lg:h-[340px] bg-red-500 fill-slate-600 rounded-md overflow-hidden relative'>
              <img 
              className='w-full h-full object-cover'
              src={appart.cover} alt="" />
              <h2 className='text-white font-semibold text-lg absolute bottom-2 left-2 '>{appart.title}</h2>
            </Link>
          ))
        }      
      </div>
    </>
  )
  return content
}
