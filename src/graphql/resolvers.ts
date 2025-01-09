import { Article, IArticle } from '../models/articleModel';

export const resolvers = {
    Query: {
        getAllArticles: async (): Promise<IArticle[]> => {
            return await Article.find({ deleted: false });
        },
    },
    Mutation: {
        deleteArticle: async (_: any, { id }: { id: string }): Promise<IArticle | null> => {
            return await Article.findByIdAndUpdate(
                id,
                { deleted: true, deletedAt: new Date() },
                { new: true }
            );
        },
    },
};
