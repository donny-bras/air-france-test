import { gql, TypedDocumentNode } from '@apollo/client';
import { QuerySearchArgs, SearchResultItemConnection } from '../../__generated__/graphql';

type QuerySearchData = {
  search: SearchResultItemConnection
}

export const GET_REPOSITORIES: TypedDocumentNode<
  QuerySearchData,
  QuerySearchArgs
> = gql`
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
