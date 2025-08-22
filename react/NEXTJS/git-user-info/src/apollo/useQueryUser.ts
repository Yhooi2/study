import { useQuery, gql } from "@apollo/client"
import { useMemo } from "react"
import { getQueryDates, getAllYearRanges, formatDate, validateCreatedAt } from "./date-helpers";
import { createDynamicUserQuery } from "./queriers";
import type { GitHubGraphQLResponse } from "./github-api.types";
import { useQueryUserCreatedAt } from "./useQueryUserCreatedAt";

// Фиктивный запрос для случая пропуска
const EMPTY_QUERY = gql`
  query EmptyQuery {
    __typename
  }
`;

// Тип возвращаемого значения хука
export type UseQueryUserResult = {
  data?: GitHubGraphQLResponse;
  loading: boolean;
  error?: any;
  createdAt?: string;
  refetch: () => void;
  networkStatus: number;
};

function useQueryUser(login: string, daysBack: number = 365, yearCount: number = 3): UseQueryUserResult {
  // Предварительный запрос для получения даты создания
  const { data: createdAtData, loading: loadingCreatedAt, error: errorCreatedAt, refetch: refetchCreatedAt } =
    useQueryUserCreatedAt(login);
  
  const createdAt = createdAtData?.user?.createdAt;

  // Основной запрос с использованием реальной даты создания
  const { query, variables, skip } = useMemo(() => {
    if (!createdAt || !validateCreatedAt(createdAt)) {
      return {
        query: EMPTY_QUERY,
        variables: {},
        skip: true
      };
    }

    try {
      const queryDates = getQueryDates(daysBack);
      const dynamicQuery = createDynamicUserQuery(yearCount);
      const currentDate = new Date();
      
      // Получаем все годовые диапазоны на основе реальной даты создания
      const allYearRanges = getAllYearRanges(createdAt, currentDate);
      const yearKeys = Object.keys(allYearRanges);
      
      // Для новых пользователей (менее года) используем все доступные годы
      const lastYearKeys = yearCount > yearKeys.length
        ? yearKeys
        : yearKeys.slice(-yearCount);
      
      const actualYearCount = Math.min(yearCount, yearKeys.length);
      
      const queryVariables: Record<string, any> = {
        login,
        from: queryDates.from,
        to: queryDates.to,
      };
      
      // Формируем переменные для каждого года
      lastYearKeys.forEach((key, index) => {
        const range = allYearRanges[key];
        const yearNum = index + 1;
        queryVariables[`year${yearNum}From`] = range.from;
        queryVariables[`year${yearNum}To`] = range.to;
      });
      
      // Добавляем пустые диапазоны для недостающих лет
      // (если запрошено больше лет, чем доступно)
      for (let i = lastYearKeys.length; i < yearCount; i++) {
        const yearNum = i + 1;
        const currentDateStr = formatDate(currentDate);
        queryVariables[`year${yearNum}From`] = currentDateStr;
        queryVariables[`year${yearNum}To`] = currentDateStr;
      }
      
      return {
        query: dynamicQuery,
        variables: queryVariables,
        skip: false
      };
    } catch (error) {
      console.error("Invalid createdAt date", error);
      return {
        query: EMPTY_QUERY,
        variables: {},
        skip: true
      };
    }
  }, [login, daysBack, yearCount, createdAt]);
  
  const mainQuery = useQuery<GitHubGraphQLResponse>(query, {
    variables,
    skip: skip || !login,
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first' // Используем кэширование
  });

  return {
    ...mainQuery,
    loading: loadingCreatedAt || mainQuery.loading,
    error: errorCreatedAt || mainQuery.error,
    createdAt, // Возвращаем дату создания для использования в компонентах
    refetch: () => {
      refetchCreatedAt();
      mainQuery.refetch();
    }
  };
};

export default useQueryUser
