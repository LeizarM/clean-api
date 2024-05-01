import { Elysia, t } from 'elysia';
import { createController } from '../server/dependencies.js';


export const userRouter = new Elysia({
    prefix: '/users',
    
}).post('/',()=> createController.run.bind(createController), {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      })
    })
  .get('/',()=> "get all users");