import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login: mutate, isLoading: isPending };
}

export default useLogin;
