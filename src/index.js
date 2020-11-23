// Dependencies
import { GraphQLServer } from 'graphql-yoga';
// Scalar types = String, Boolean, Int, Float, Id
// Type Definitions (schema)

// Demo Users Data
const users = [
  {
    id: '1',
    name: 'Jesus',
    email: 'jesus@example.com',
    age: 35
  },
  {
    id: '2',
    name: 'Elo',
    email: 'elo@example.com',
    age: 29
  },
  {
    id: '3',
    name: 'Aleisa',
    email: 'aleisa@example.com',
    age: 6
  }
];

// Demo Posts Data
const posts = [
  {
    id: '10',
    title: 'First post',
    body: 'This is the first post',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'Second post',
    body: 'This is the second post',
    published: false,
    author: '3'
  },
  {
    id: '12',
    title: 'Third post',
    body: 'This is the third post',
    published: true,
    author: '3'
  },
];

// Demo Comments Data
const comments = [
  {
    id: '1',
    text: 'Hello world!',
    author: '1',
    post: '10'
  },
  {
    id: '2',
    text: 'Comment example!',
    author: '1',
    post: '11'
  },
  {
    id: '3',
    text: 'Hi Mike!',
    author: '2',
    post: '11'
  },
  {
    id: '4',
    text: 'Are you working?',
    author: '3',
    post: '12'
  },
];

const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comment(query: String): [Comment!]!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    posts: [Post!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parents, args, cts, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
    },
    posts(parents, args, cts, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    comment(parent, args, ctx, info) {
      return comments;
    },
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
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.post === parent.id);
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.author === parent.id);
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.id === parent.post);
    },
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is run!'); // eslint-disable-line
});
