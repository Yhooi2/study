// Apollo Client v4 setup for React (Vite) with useQuery and global error handling

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { toast } from 'sonner';

// 1. HTTP link to GraphQL endpoint
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql', // replace with your GraphQL server
});

// 2. Auth middleware: adds Authorization header with token
const authLink = setContext((_, { headers }) => {
  const envToken = import.meta.env.VITE_GITHUB_TOKEN;
  const storedToken = localStorage.getItem('github_token');
  const token = envToken || storedToken;
  return {
    headers: {
      ...headers,
      // Attach token if available
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// 3. Global error handler with onError
const errorLink = onError(({ graphQLErrors, networkError }) => {
  // Handle GraphQL errors
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
        const errorMessage = `[GraphQL error]: ${message}`;
      console.error(errorMessage); // Log the error message [oai_citation:0‡apollographql.com](https://www.apollographql.com/docs/react/data/error-handling#:~:text=4%20const%20errorLink%20%3D%20onError%28%28,networkError)
      toast.error(errorMessage)
      // If unauthenticated error, clear token
      if (extensions?.code === 'UNAUTHENTICATED') {
        localStorage.removeItem('github_token'); // Apollo Server uses code 'UNAUTHENTICATED' for auth issues [oai_citation:1‡apollographql.com](https://www.apollographql.com/docs/react/data/error-handling#:~:text=3%20%20%20%20for,UNAUTHENTICATED)
      }
    });
  }
  // Handle Network errors (e.g., HTTP errors)
  if (networkError) {
    // If status 401 Unauthorized, remove token
    if ('statusCode' in networkError && networkError.statusCode === 401) {
      localStorage.removeItem('github_token');
    }
    const errorMessage = `[Network error]: ${networkError}`;
    console.error(errorMessage); // Log network errors [oai_citation:2‡apollographql.com](https://www.apollographql.com/docs/react/data/error-handling#:~:text=4%20const%20errorLink%20%3D%20onError%28%28,networkError)
    toast.error(errorMessage)
  }
});

// 4. Combine links: errorLink -> authLink -> httpLink
const link = ApolloLink.from([errorLink, authLink, httpLink]);

// 5. Instantiate ApolloClient with cache and link chain
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// 6. Wrap React app with ApolloProvider
export function ApolloAppProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

/*
Changes in Apollo Client v4 error handling (onError):
- Apollo Client v4 splits errors into classes: use `error.name` or instanceof to distinguish them (e.g. 'ApolloGraphQLError' vs 'ApolloNetworkError') [oai_citation:3‡github.com](https://github.com/apollographql/apollo-client/issues/12200#:~:text=const%20,useQuery).
- GraphQL errors are combined into a CombinedGraphQLErrors object (with a `.data` property for any partial data) [oai_citation:4‡blog.gitcode.com](https://blog.gitcode.com/8a7813ced7919b7bb3fe0587a696d8e2.html#:~:text=1.%20%E8%A7%A3%E6%9E%90%E5%93%8D%E5%BA%94%E4%BD%93%EF%BC%8C%E5%88%86%E7%A6%BB%E5%87%BA%E6%95%B0%E6%8D%AE%E5%92%8C%E9%94%99%E8%AF%AF%E9%83%A8%E5%88%86%202.%20%E5%A6%82%E6%9E%9C%E5%AD%98%E5%9C%A8%E9%94%99%E8%AF%AF%EF%BC%8C%E5%88%9B%E5%BB%BA%20,%E8%AE%BF%E9%97%AE%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE). 
- Protocol errors (e.g. multipart/subscriptions) use CombinedProtocolError.
Thus, in onError we still destructure { graphQLErrors, networkError }, log them, and handle codes (like 'UNAUTHENTICATED') accordingly [oai_citation:5‡apollographql.com](https://www.apollographql.com/docs/react/data/error-handling#:~:text=4%20const%20errorLink%20%3D%20onError%28%28,networkError) [oai_citation:6‡apollographql.com](https://www.apollographql.com/docs/react/data/error-handling#:~:text=3%20%20%20%20for,UNAUTHENTICATED).
*/