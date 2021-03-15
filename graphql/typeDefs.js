const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    role: String!
  }
  type Dog{
    id: ID!
    name: String!
    age: Int!
    inFoster: Boolean!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input DogInput{
    name: String!
    age: Int!
    inFoster: Boolean!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getUsers: [User]
    getDogs: [Dog]
    getDog(dogId: ID!): Dog
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createDog(newDog: DogInput): Dog!
    deleteDog(dogId: ID!): Dog!
  }
  type Subscription {
    newPost: Post!
  }
`;
