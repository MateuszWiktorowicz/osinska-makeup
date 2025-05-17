import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost/osinska-makeup-wordpress/index.php?graphql",
  cache: new InMemoryCache(),
});

export default client;
