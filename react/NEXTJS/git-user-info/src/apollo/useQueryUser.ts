import { useQuery } from "@apollo/client"
import { useMemo } from "react"
import { getQueryDates, getThreeYearRanges } from "./date-helpers";
import { GET_USER_INFO } from "./queriers";
import type { GitHubGraphQLResponse } from "./github-api.types";

function useQueryUser(login: string, daysBack: number = 365) {
  const variables = useMemo(() => {
    const queryDates = getQueryDates(daysBack);
    const yearRanges = getThreeYearRanges();
    
    return {
      login,
      from: queryDates.from,
      to: queryDates.to,
      year1From: yearRanges.year1.from,
      year1To: yearRanges.year1.to,
      year2From: yearRanges.year2.from,
      year2To: yearRanges.year2.to,
      year3From: yearRanges.year3.from,
      year3To: yearRanges.year3.to,
    };
  }, [login]);
  
    return useQuery<GitHubGraphQLResponse>(GET_USER_INFO, {
      variables,
      skip: !login,
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
    });
  };
export default useQueryUser
