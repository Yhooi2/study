import CabinCard from "./CabinCard";

export const metadata = {
  title: "Cabins",
};

async function Page() {
  const cabins = [];
  return (
    <div>
      <h1 className="text-center text-4xl text-accent-400 font-medium mb-5">
        Our Luxury Cabins
      </h1>
      <p className="text-lg text-primary-200 mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default Page;
