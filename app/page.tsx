import Navbar from "./_navbar/page";
import ExploreCard from "./explore-card";


export default function Home() {
  const data: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="h-screen flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-6xl">Download 1000+ datasets</h1>
          <p className="text-2xl">Iot captured ai based datasets available here for free </p>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-5 justify-center text-center gap-4">
          {data.map((card: number, index: number) => {
            return (
              <ExploreCard
                key={index}
                title={card.toString()}
                desc="Lorem ipsum dolor sit amet."
                imageUrl=""
              />
            )
          })}
        </div>
      </main>
    </>
  );
}