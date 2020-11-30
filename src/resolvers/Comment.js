export const Comment = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => user.id === parent.author);
  },
  posts(parent, args, { db }, info) {
    return db.posts.filter((post) => post.id === parent.post);
  },
};
