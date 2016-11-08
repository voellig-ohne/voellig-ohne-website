// taken from / inspired by https://github.com/scottnonnenberg/blog thanks!

import loadPosts from './util/loadPosts';
import buildFeeds from './util/buildFeeds';

const posts = loadPosts({
  limit: 20,
});

buildFeeds(posts);
