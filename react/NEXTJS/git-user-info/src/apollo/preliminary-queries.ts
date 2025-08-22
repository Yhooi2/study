import { gql } from "@apollo/client";

export const GET_USER_CREATED_AT = gql`
  query GetUserCreatedAt($login: String!) {
    user(login: $login) {
      createdAt
    }
  }
`;

