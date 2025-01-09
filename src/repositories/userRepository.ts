import { Article, IArticle } from '../models/articleModel';

export class UserRepository {
    public async getAllArticles(): Promise<IArticle[]> {
        return await Article.find({ deleted: false });
        //return await Article.find({ deleted: false }).select('-categoryId'); // Exclude 'categoryId'
    }

    // public async createUser(username: string, email: string): Promise<IUser> {
    //     const user = new User({ username, email });
    //     return await user.save();
    // }

    

    // public async getUserById(id: string): Promise<IUser | null> {
    //     return await User.findById(id);
    // }
}
