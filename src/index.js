/* eslint-disable no-shadow */
// Dependencies
import { GraphQLServer } from 'graphql-yoga';

// DB
import { db } from './db';

// Resolvers
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { User } from './resolvers/User';
import { Post } from './resolvers/Post';
import { Comment } from './resolvers/Comment';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment
  },
  context: {
    db
  }
});

server.start(() => {
  console.log('The server is run!'); // eslint-disable-line
});
