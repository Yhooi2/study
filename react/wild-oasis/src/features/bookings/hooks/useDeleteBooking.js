import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../../services/apiBookings";
import { toast } from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { deleteBooking: mutate, isDeleting };
}

export default useDeleteBooking;
