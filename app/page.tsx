import Image from 'next/image'
import Card from './components/Card'
import Banner from './components/Banner'

export default function Home() {
  const cards = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
    <Banner />
    <div className='mt-5 mb-7 p-0 lg:px-7 lg:py-10 bg-transparent lg:bg-blue-200 md:rounded-2xl w-full mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-between items-center'>
      {
        cards.map((map, index) => (
          <Card key={index} />
        ))
      }
    </div>
    </>
  )
}
