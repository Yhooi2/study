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
    contrib2023: YearlyContributions;
    contrib2024: YearlyContributions;
    contrib2025: YearlyContributions;
    createdAt: string;
    contributionsCollection: ContributionsCollection;
    repositories: Repositories;
  };
  
  // Root GraphQL response type
  type GitHubGraphQLResponse = {
      user: GitHubUser;
  };
  
  export type {
    GitHubGraphQLResponse,
    GitHubUser,
    Repository,
    Languages,
    ProgrammingLanguage,
    ContributionsCollection,
    RepositoryContributions,
    YearlyContributions,
    PageInfo,
    ConnectionCount
  };