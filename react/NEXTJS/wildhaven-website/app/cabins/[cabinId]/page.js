import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const styles = {
  li: "flex items-center gap-3",
  icon: "w-5 h-5 text-primary-600",
};

async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  console.log(cabin);
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 text-lg mb-24 py-3 p-10 border border-l-0 border-primary-800">
        <div className="relative scale-110 -translate-x-3 ">
          <Image
            src={cabin.image}
            alt={`${cabin.name} image`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h3 className="text-7xl text-accent-100 -translate-x-64 w-[150%] p-6 pb-1 bg-primary-950">{`Cabin ${cabin.name}`}</h3>
          <p className="text-primary-300 mb-10">{cabin.description}</p>
          <ul className="flex flex-col gap-4">
            <li className={styles.li}>
              <UsersIcon className={styles.icon} />
              <span>For up to </span>
              <span className="font-bold">{cabin.maxCapacity} </span>
              <span>guests.</span>
            </li>
            <li className={styles.li}>
              <MapPinIcon className={styles.icon} />
              <span>{cabin.address}</span>
              <span>
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className={styles.li}>
              <EyeSlashIcon className={styles.icon} />
              <span>{cabin.address}</span>
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}

export default Page;
