import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

// Load environment variables from .env file
dotenv.config();

const app: any = express();
app.use(express.json());

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Start the Apollo Server and apply middleware
(async () => {
    try {
        await server.start(); // Await server startup
        server.applyMiddleware({ 
            app,
            //path:"/naruto"
        });

        console.log(`Apollo Server ready at http://localhost:${process.env.PORT ?? 1234}${server.graphqlPath}`);
    } catch (err) {
        console.error('Apollo Server error:', err);
    }
})();

// MongoDB connection
const mongoUri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/defaultdb';
(async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
})();

export default app;
