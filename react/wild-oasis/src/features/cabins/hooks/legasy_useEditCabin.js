import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabin } from "../../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: mutateEdit, isPending: isUpdating } = useMutation({
    mutationFn: editCabin,
    onSuccess: () => {
      toast.success("Cabin successfully edited!!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => toast.error(err.message),
  });
  return { mutateEdit, isUpdating };
}
