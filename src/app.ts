import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import {
  addMicro,
  getAllMicros,
  getSingleMicro,
} from "./modules/micros/resolver";

class App {
  public async start() {
    const resolvers = {
      Query: {
        micros: () => getAllMicros(),
        micro: (parent, args) => getSingleMicro(args.id),
      },
      Mutation: {
        addMicro,
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
