import { Suspense } from "react";
import Spinner from "./../_components/Spiner";
import CabinList from "./_components/CabinList";

export const metadata = {
  title: "Cabins",
};
// export const dynamic = "force-dynamic";
// export const revalidate = 3600; // 1 hour
export const experimental_ppr = true;

function Page() {
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
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}

export default Page;
