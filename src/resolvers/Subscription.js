export const Subscription = {
  comment: {
    subscribe(parent, { commentId }, { db, pubsub }, info) {
      const post = db.posts.find((dbPost) => dbPost.id === commentId && dbPost.published);

      if (!post) {
        throw new Error('Post not found');
      }

      return pubsub.asyncIterator(`comment ${commentId}`);
    }
  },
  post: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('post');
    }
  }
};
