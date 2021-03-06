import { useUserService } from "../services/User.service";

const { getUsers, getUser, addUser, updateUser, deleteUser } = useUserService();

export default {
  Query: {
    getUsers,
    getUser,
  },
  Mutation: {
    addUser,
    updateUser,
    deleteUser,
  },
};
