import { useMutation } from "@tanstack/react-query";
import login from "../../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login: mutate, isLoading: isPending };
}

export default useLogin;
