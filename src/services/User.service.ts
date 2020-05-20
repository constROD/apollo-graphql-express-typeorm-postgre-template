import { User, UserInput, Action } from "../interface/User";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/User";

export const useUserService = () => {
  const getUsers = async (): Promise<User[] | []> => {
    try {
      const userManager = getCustomRepository(UserRepository);
      const results = await userManager.getUsers();

      return results;
    } catch (err) {
      console.log("Error getUsers Service: ", err);
      return [];
    }
  };

  type GetUserArgs = {
    id: number;
  };

  const getUser = async (_: any, args: GetUserArgs): Promise<User | undefined> => {
    const { id } = args;

    try {
      const userManager = getCustomRepository(UserRepository);
      const results = await userManager.getUser(id);

      return results;
    } catch (err) {
      console.log("Error getUser Service: ", err);
      return undefined;
    }
  };

  type AddUserArgs = {
    input: UserInput;
  };

  const addUser = async (_: any, args: AddUserArgs): Promise<Action> => {
    const { input } = args;

    try {
      const userManager = getCustomRepository(UserRepository);
      await userManager.addUser(input);

      return { success: true };
    } catch (err) {
      console.log("Error addUser Service: ", err);
      return { success: false };
    }
  };

  type UpdateUserArgs = {
    id: number;
    input: UserInput;
  };

  const updateUser = async (_: any, args: UpdateUserArgs): Promise<Action> => {
    const { input } = args;

    try {
      const userManager = getCustomRepository(UserRepository);
      await userManager.updateUser(args.id, input);

      return { success: true };
    } catch (err) {
      console.log("Error updateUser Service: ", err);
      return { success: false };
    }
  };

  type DeleteUserArgs = {
    id: number;
  };

  const deleteUser = async (_: any, args: DeleteUserArgs): Promise<Action> => {
    const { id } = args;

    try {
      const userManager = getCustomRepository(UserRepository);
      await userManager.deleteUser(id);

      return { success: true };
    } catch (err) {
      console.log("Error deleteUser Service: ", err);
      return { success: false };
    }
  };

  return {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
  };
};
