import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const notFound = "User not found!"

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  try {
    return createUserController.handle(request, response)
  } catch (err: any) {

    return response.status(400).json({ error: err.message })
  }
}


);

usersRoutes.patch("/:user_id/admin", (request, response) => {

  try {
    return turnUserAdminController.handle(request, response);
    
  } catch (err: any) {

    return response.status(404).json({ error: err.message })
  }

}

);

usersRoutes.get("/:user_id", (request, response) => {
  try {
    return showUserProfileController.handle(request, response)
  } catch (err: any) {
    return response.status(404).json({ error: err.message })
  }
}

);

usersRoutes.get("/", (request, response) => {
  try {
    return listAllUsersController.handle(request, response)

  } catch (err: any) {


    return response.status(400).json({ error: err.message })
  }
}

);

export { usersRoutes };
