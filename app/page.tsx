import { fetchAllDatasets } from "@/action";
import Navbar from "./_navbar/page";
import ExploreCard from "./explore-card";


export default async function Home() {
  const data = (await fetchAllDatasets());
  console.log(data);
  

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="h-screen flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-6xl">Download 1000+ datasets</h1>
          <p className="text-2xl">Iot captured ai based datasets available here for free </p>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-5 justify-center text-center gap-4">
          {data?.map((card: any, index: number) => (
            <ExploreCard
              key={index}
              _id={card._id}
              title={card.title}
              imageUrl={`data:image/jpg;base64,${card.data[0].toString('base64')}`}
            />
          ))}
        </div>
      </main>
    </>
  );
}