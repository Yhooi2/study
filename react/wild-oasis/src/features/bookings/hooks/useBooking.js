import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../../services/apiBookings";

function useBooking(bookingId) {
  return useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
  });
}

export default useBooking;
