import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import db from "./firestore";

class App {
  public async start() {
    const books = [
      {
        title: "The Awakening",
        author: "Kate Chopin",
      },
      {
        title: "City of Glass",
        author: "Paul Auster",
      },
    ];

    const resolvers = {
      Query: {
        books: () => books,
      },
    };

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      cache: "bounded",
    });

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  }
}

export default App;
