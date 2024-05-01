import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList />
        <br />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
