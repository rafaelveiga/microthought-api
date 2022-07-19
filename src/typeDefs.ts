import { gql } from "apollo-server";

const typeDefs = gql`
  type Micro {
    id: ID
    title: String
    content: String
    date: String
  }

  type Query {
    micros: [Micro]
    micro(id: ID!): Micro
  }

  type Mutation {
    addMicro(title: String, content: String, date: String): Micro
  }
`;

export default typeDefs;
