import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

// export const createUser = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { username, email } = req.body;
//         const newUser = await userService.createUser(username, email);
//         res.status(201).json(newUser);
//     } catch (err) {
//         res.status(500).json({ error: "lỗi cc" });
//     }
// };

export const getAllArticles = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllArticles();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching articles' });
    }
};
