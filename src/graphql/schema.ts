import { gql } from 'apollo-server-express';

// Define the GraphQL schema
//The ! indicates that the field is required (it cannot be null).
export const typeDefs = gql`
    type Article {
        id: ID! 
        title: String!
        avatar: String!
        description: String!
        deleted: Boolean!
        deletedAt: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        getAllArticles: [Article]
    }

    type Mutation {
        deleteArticle(id: ID!): Article
    }
`;
