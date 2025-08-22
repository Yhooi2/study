import { gql } from "@apollo/client";

// GraphQL фрагменты для повторяющихся полей
const USER_BASIC_INFO_FRAGMENT = gql`
  fragment UserBasicInfo on User {
    id
    login
    name
    avatarUrl
    bio
    url
    location
    createdAt
  }
`;

const USER_CONNECTIONS_FRAGMENT = gql`
  fragment UserConnections on User {
    followers {
      totalCount
    }
    following {
      totalCount
    }
    gists {
      totalCount
    }
  }
`;

const CONTRIBUTIONS_COLLECTION_FRAGMENT = gql`
  fragment ContributionsCollection on ContributionsCollection {
    totalCommitContributions
    commitContributionsByRepository(maxRepositories: 100) {
      contributions {
        totalCount
      }
      repository {
        name
      }
    }
  }
`;

const REPOSITORY_LANGUAGES_FRAGMENT = gql`
  fragment RepositoryLanguages on Repository {
    languages(first: 5) {
      totalSize
      edges {
        size
        node {
          name
        }
      }
    }
  }
`;

const REPOSITORY_BASIC_INFO_FRAGMENT = gql`
  fragment RepositoryBasicInfo on Repository {
    id
    name
    description
    forkCount
    stargazerCount
    url
    primaryLanguage {
      name
    }
  }
`;

const REPOSITORY_COMMIT_HISTORY_FRAGMENT = gql`
  fragment RepositoryCommitHistory on Repository {
    defaultBranchRef {
      target {
        ... on Commit {
          history {
            totalCount
          }
        }
      }
    }
  }
`;

// Функция для создания динамического запроса с произвольным количеством годов
export const createDynamicUserQuery = (yearCount: number) => {
  // Создаем переменные для годов
  const yearVariables = Array.from({ length: yearCount }, (_, index) => {
    const yearNum = index + 1;
    return `$year${yearNum}From: DateTime!, $year${yearNum}To: DateTime!`;
  }).join(',\n    ');

  // Создаем поля для вкладов по годам
  const yearContributions = Array.from({ length: yearCount }, (_, index) => {
    const yearNum = index + 1;
    return `contrib${2023 + index}: contributionsCollection(from: $year${yearNum}From, to: $year${yearNum}To) {
        totalCommitContributions
      }`;
  }).join('\n      ');

  return gql`
    query GetUserDynamic($login: String!, 
      $from: DateTime!, 
      $to: DateTime!,
      ${yearVariables}
    ) {
      user(login: $login) {
        ...UserBasicInfo
        ...UserConnections
        ${yearContributions}
        contributionsCollection(from: $from, to: $to) {
          ...ContributionsCollection
        }
        repositories(first: 100, ownerAffiliations: [OWNER]) {
          totalCount
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
            ...RepositoryBasicInfo
            ...RepositoryCommitHistory
            ...RepositoryLanguages
          }
        }
      }
    }
    ${USER_BASIC_INFO_FRAGMENT}
    ${USER_CONNECTIONS_FRAGMENT}
    ${CONTRIBUTIONS_COLLECTION_FRAGMENT}
    ${REPOSITORY_BASIC_INFO_FRAGMENT}
    ${REPOSITORY_COMMIT_HISTORY_FRAGMENT}
    ${REPOSITORY_LANGUAGES_FRAGMENT}
  `;
};

// Статический запрос для обратной совместимости (3 года)
export const GET_USER_INFO = createDynamicUserQuery(3);

// Динамический запрос по умолчанию (3 года)
export const GET_USER_INFO_DYNAMIC = GET_USER_INFO;