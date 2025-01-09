import { Article } from '../models/articleModel';

export const resolvers = {
    Query: {
        getAllArticles: async () => {
            return await Article.find().where({ deleted: false });  // Only return non-deleted articles
        },
        getArticleById: async (_: any, { id }: { id: string }) => {
            return await Article.findById(id);
        },
    },

    Mutation: {
        // Create a new article
        createArticle: async (_: any, { title, avatar, description }: { title: string; avatar: string; description: string }) => {
            const article = new Article({ title, avatar, description });
            return await article.save();
        },

        // Update an existing article
        updateArticle: async (_: any, { id, title, avatar, description }: { id: string; title?: string; avatar?: string; description?: string }) => {
            const updatedArticle = await Article.findByIdAndUpdate(id, { title, avatar, description }, { new: true });
            return updatedArticle;
        },

        // Delete an article (soft delete - set 'deleted' to true)
        deleteArticle: async (_: any, { id }: { id: string }) => {
            const deletedArticle = await Article.findByIdAndUpdate(id, { deleted: true, deletedAt: new Date() }, { new: true });
            return deletedArticle;
        },
    }
};
