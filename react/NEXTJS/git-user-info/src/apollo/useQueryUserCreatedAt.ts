import { useQuery } from "@apollo/client";
import { GET_USER_CREATED_AT } from "./preliminary-queries";
import type { SimpleUserGraphQLResponse } from "./github-api.types";

export function useQueryUserCreatedAt(login: string) {
  return useQuery<SimpleUserGraphQLResponse>(GET_USER_CREATED_AT, {
    variables: { login },
    skip: !login,
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
  });
}

