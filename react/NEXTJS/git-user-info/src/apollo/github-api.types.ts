// Pagination types
type PageInfo = {
    endCursor: string;
    hasNextPage: boolean;
  };
  
  // Programming language types
  type ProgrammingLanguage = {
    name: string;
  };
  
  type LanguageEdge = {
    size: number;
    node: ProgrammingLanguage;
  };
  
  type Languages = {
    totalSize: number;
    edges: LanguageEdge[];
  };
  
  // Commit history types
  type CommitHistory = {
    totalCount: number;
  };
  
  type GitTarget = {
    history: CommitHistory;
  };
  
  type BranchRef = {
    target: GitTarget;
  };
  
  // Repository contribution types
  type ContributionsByRepository = {
    totalCount: number;
  };
  
  type RepositoryContributions = {
    contributions: ContributionsByRepository;
    repository: {
      name: string;
    };
  };
  
  // Contribution collection types
  type ContributionsCollection = {
    totalCommitContributions: number;
    commitContributionsByRepository: RepositoryContributions[];
  };
  
  // Yearly contribution types
  type YearlyContributions = {
    totalCommitContributions: number;
  };
  
  // Connection count types (followers/following/gists)
  type ConnectionCount = {
    totalCount: number;
  };
  
  // Repository type
  type Repository = {
    name: string;
    id: string;
    description: string | null;
    forkCount: number;
    stargazerCount: number;
    url: string;
    defaultBranchRef: BranchRef | null;
    primaryLanguage: ProgrammingLanguage | null;
    languages: Languages;
  };
  
  // Repository collection types
  type Repositories = {
    totalCount: number;
    pageInfo: PageInfo;
    nodes: Repository[];
  };
  
  // Simple user type for createdAt query
  type SimpleUser = {
    createdAt: string;
  };

  // GitHub user type
  type GitHubUser = {
    id: string;
    login: string;
    name: string;
    avatarUrl: string;
    bio: string;
    url: string;
    location: string | null;
    followers: ConnectionCount;
    following: ConnectionCount;
    gists: ConnectionCount;
    [key: `contrib${number}`]: YearlyContributions; // Динамические свойства для годовых вкладов
    createdAt: string;
    contributionsCollection: ContributionsCollection;
    repositories: Repositories;
  };
  
  // Root GraphQL response type
  type GitHubGraphQLResponse = {
      user: GitHubUser;
  };

  // Simple GraphQL response type for createdAt query
  type SimpleUserGraphQLResponse = {
    user: SimpleUser;
  };
  
  // Хелпер для проверки типа YearlyContributions
  export function isYearlyContributions(obj: any): obj is YearlyContributions {
    return obj && typeof obj === 'object' && 'totalCommitContributions' in obj
  }

  export type {
    GitHubGraphQLResponse,
    SimpleUserGraphQLResponse,
    GitHubUser,
    SimpleUser,
    Repository,
    Languages,
    ProgrammingLanguage,
    ContributionsCollection,
    RepositoryContributions,
    YearlyContributions,
    PageInfo,
    ConnectionCount
  };