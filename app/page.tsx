import Banner from "./components/Banner";
import getAllApparts from "@/lib/getAllApparts";
import Card from "./components/Card";



export default async function Home() {
  const appartsData: Promise<Appart[]> = getAllApparts();
  const apparts = await appartsData;
  const content = (
    <>
      <Banner />
      <div className="mt-5 mb-7 p-0 lg:px-7 lg:py-10 bg-transparent lg:bg-[rgb(246,246,246)] md:rounded-2xl w-full mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-evenly ">
        {apparts.map((appart) => (
          <Card key={appart.id} appart={appart} />
        ))}
      </div>
    </>
  );
  return content;
}
