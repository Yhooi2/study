import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../../services/apiBookings";

function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
      queryClient.setQueryData(["booking", data.id], data);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { checkout, isCheckingOut };
}

export default useCheckout;
