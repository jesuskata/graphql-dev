// Dependencies
import { GraphQLServer } from 'graphql-yoga';
// Scalar types = String, Boolean, Int, Float, Id
// Type Definitions (schema)
const typeDefs = `
  type Query {
    me: User!
    post: Post!
    add(numbers: [Int!]!): Int!
    grades: [Int!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: '123-idname',
        name: 'Jesus Romero',
        email: 'rzarate.alex@gmail.com',
        age: 35
      };
    },
    post() {
      return {
        id: '321-idname',
        title: 'Hello World!',
        body: 'This is a hello world graphql example',
        published: true
      };
    },
    // eslint-disable-next-line consistent-return
    add(parent, args, ctx, info) {
      if (args.numbers === 0) {
        return 0;
      }
      // [1, 5, 10, 2]
      return args.numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    },
    grades(parent, args, ctx, info) {
      return [12, 67, 45];
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is run!');
});
