import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useCabinMutation(func) {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: func,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, mutate };
}

export default useCabinMutation;
