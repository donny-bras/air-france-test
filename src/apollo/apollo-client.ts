import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { makeVar } from '@apollo/client';
import { Repository } from '../models/Repository';

export const favoriteRepositoriesVar = makeVar(new Map<string, Repository>());

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_GITHUB_API_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  connectToDevTools: true,
});

export default client;
