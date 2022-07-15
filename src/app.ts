import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import db from "./firestore";
import { getAllMicros } from "./modules/micros/resolver";

class App {
  public async start() {
    const resolvers = {
      Query: {
        micros: () => getAllMicros(),
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
