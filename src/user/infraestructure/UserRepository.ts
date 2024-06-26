import type { IUser } from "../domain/IUser.js";
import { User } from "../domain/User.js";
import { PrismaClient } from "@prisma/client";


export class UserRepository implements IUser {

    private db: PrismaClient
    constructor() {

        this.db = new PrismaClient();
    }


    async create(email: string, password: string): Promise<User> {
        
        const user = await this.db.user.create({
            data: {
                email,
                password
            }
        });

        //return user; probar mas adelante esto
        return new User(user.id, user.email, user.password);

    }



}