import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

function useUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isAuthenticated: user?.role === "authenticated", isLoading, user };
}

export default useUser;
