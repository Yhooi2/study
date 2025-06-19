import { useQuery } from "@tanstack/react-query";
import { getCabins } from "./../api/apiCabins";

function useCabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { cabins, isLoading, error };
}

export default useCabins;
