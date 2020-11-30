export const Subscription = {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0;

      setInterval(() => {
        count += 1;
        pubsub.publish('count', {
          count
        });
      }, 1000);

      return pubsub.asyncIterator('count');
    }
  },
  comment: {
    subscribe(parent, { commentId }, { db, pubsub }, info) {
      const post = db.posts.find((dbPost) => dbPost.id === commentId && dbPost.published);

      if (!post) {
        throw new Error('Post not found');
      }

      return pubsub.asyncIterator(`comment ${commentId}`);
    }
  }
};
