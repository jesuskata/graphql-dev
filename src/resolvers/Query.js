export const Query = {
  users(parents, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
  },
  posts(parents, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    });
  },
  comment(parent, args, { db }, info) {
    return db.comments;
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
};
