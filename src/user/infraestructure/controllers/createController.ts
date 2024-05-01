import { CreateUser } from "../../application/create.js";

export class CreateController {

    constructor( private createUser: CreateUser ) {

    }

    async run( {body } : any ) {
        try {
            
            const user = await this.createUser.run( body.email, body.password );
            return user;
        } catch (error) {

            const e = error as Error;
            return {
                status: 500,
                message: e.message
            }
        }
    }
}