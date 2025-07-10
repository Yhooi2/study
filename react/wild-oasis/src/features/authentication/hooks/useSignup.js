import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate, isPanding } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success(
        `Account ${user.user?.user_metadata?.fullName} successfully created! Please verify the new account from the user's email address`,
      );
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });
  return { signup: mutate, isLoading: isPanding };
}

export default useSignup;
