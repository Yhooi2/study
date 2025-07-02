import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../../services/apiAuth";
import { toast } from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User updated successfully");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUser, isUpdating };
}

export default useUpdateUser;
