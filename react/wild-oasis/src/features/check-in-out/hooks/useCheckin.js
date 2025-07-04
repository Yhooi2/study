import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../../services/apiBookings";

function useCheckin() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      queryClient.setQueryData(["booking", data.id], data);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { checkin, isCheckingIn };
}

export default useCheckin;
