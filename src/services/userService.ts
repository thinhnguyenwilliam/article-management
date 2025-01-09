import { UserRepository } from '../repositories/userRepository';
import { IArticle } from '../models/articleModel';

export class UserService {
    // Mark userRepository as readonly since it's only assigned once
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAllArticles(): Promise<IArticle[]> {
        return await this.userRepository.getAllArticles();
    }

    // public async createUser(username: string, email: string): Promise<IUser> {
    //     return await this.userRepository.createUser(username, email);
    // }

    

    // public async getUserById(id: string): Promise<IUser | null> {
    //     return await this.userRepository.getUserById(id);
    // }
}
