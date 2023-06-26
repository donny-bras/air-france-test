import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES($type: SearchType!, $query: String!) {
    search(type: $type, query: $query, first: 100) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          url
          name
          description
        }
      }
    }
  }
`;
