import { UserRepository } from "../user/infraestructure/UserRepository.js";
import { CreateUser } from "../user/application/create.js";
import { CreateController } from "../user/infraestructure/controllers/createController.js";

const userRepository = new UserRepository();
const createUser = new CreateUser(userRepository);
export const createController = new CreateController(createUser);
