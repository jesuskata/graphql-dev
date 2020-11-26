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

export const db = {
  users, posts, comments
};
