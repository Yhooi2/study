import { gql } from "@apollo/client";

export const GET_USER_INFO= gql`query GetUser($login: String!, 
    $from: DateTime!, 
    $to: DateTime!,
    $year1From: DateTime!,
    $year1To: DateTime!,
    $year2From: DateTime!,
    $year2To: DateTime!,
    $year3From: DateTime!,
    $year3To: DateTime!
  ) {
    user(login: $login) {
      id
      login
      name
      avatarUrl
      bio
      url
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
      contrib2023: contributionsCollection(from: $year1From, to: $year1To) {
        totalCommitContributions
      }
      contrib2024: contributionsCollection(from: $year2From, to: $year2To) {
        totalCommitContributions
      }
      contrib2025: contributionsCollection(from: $year3From, to: $year3To) {
        totalCommitContributions
      }
      createdAt
      contributionsCollection(from: $from, to: $to) {
      totalCommitContributions  # Total commits by user in the period
      commitContributionsByRepository(maxRepositories: 100) {
        contributions {
          totalCount  # Commits in this repository
        }
        repository {
          name  # Repository name
        }
      }
    }
    repositories(first: 100, affiliations: OWNER) {
      totalCount  # Total number of repositories
      pageInfo {
        endCursor  # Cursor for next page
        hasNextPage  # Indicates if more repositories exist
      }
      nodes {
        id
        name  # Repository name
        description
        forkCount
        stargazerCount
        url  # For cloning (if precise LOC is needed)
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount  # Commits in the default branch
              }
            }
          }
        }
        primaryLanguage {
          name  # Primary programming language (may be null)
        }
        languages(first: 5) {
          totalSize  # Total code size in bytes
          edges {
            size  # Size per language in bytes
            node {
              name  # Language name
            }
          }
        }
      }
    }
  }
}`