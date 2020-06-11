export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    images: (_, __, { dataSources }) => dataSources.imageAPI.getAllImages(),
    tags: (_, __, { dataSources }) => [],
  },
};
