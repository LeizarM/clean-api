import { Elysia }from "elysia";
import { userRouter } from '../user/userRouter.js';
export class Server {

    private app : Elysia;

    constructor() {
        this.app = new Elysia();
        this.app.group('api/v1',(app) => 

            app.use(userRouter)
        );

    }


    public start(){

        this.app.listen( process.env.PORT || 3001, ()=>{

            console.log("Listening on port 3001");
        });
    }
}