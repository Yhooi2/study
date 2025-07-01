import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPanding } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (error) => toast(error),
  });
  return { logout: mutate, isLoading: isPanding };
}

export default useLogout;
