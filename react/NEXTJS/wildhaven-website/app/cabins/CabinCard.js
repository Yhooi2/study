import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border border-primary-800">
      <div className="relative flex-1">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover border-r border-primary-800"
        />
      </div>
      <div className="flex-grow">
        <div className="px-7 pt-5 pb-4 bg-primary-950">
          <h3 className="text-2xl font-semibold text-accent-500 mb-3">
            Cabin {name}
          </h3>
          <div className="flex items-center mb-2">
            <UsersIcon className="w-5 h-5 text-primary-500" />
            <p className="text-primary-200 text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>
          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
        <div className="text-right border-t border-t-primary-800">
          <Link
            href={`/cabins/${id}`}
            className="px-6 py-4 border-l border-primary-800 inline-block hover:bg-accent-600 transition-colors hover:text-primary-900"
          >
            Details & reservation &rarr;{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
