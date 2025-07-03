import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isPending: isLoadingBookings } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoadingBookings, numDays };
}

export default useRecentBookings;
