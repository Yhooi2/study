import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate, isPanding } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success("Account successfully created!");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });
  return { signup: mutate, isLoading: isPanding };
}

export default useSignup;
