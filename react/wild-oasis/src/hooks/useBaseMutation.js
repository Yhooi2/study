import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useBaseMutation(func, key) {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: func,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, mutate };
}

export default useBaseMutation;
