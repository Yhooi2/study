import { getCabins } from "../../_lib/data-service";
import CabinCard from "./CabinCard";
import { unstable_noStore } from "next/cache";

async function CabinList() {
  unstable_noStore();
  const cabins = await getCabins();
  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-15">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
export default CabinList;
