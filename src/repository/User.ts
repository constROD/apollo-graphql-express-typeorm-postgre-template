import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entity/User";
import { UserInput } from "../interface/User";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  getUsers = async () => {
    return this.find();
  };
  getUser = async (id: number) => {
    return this.findOne({ id });
  };
  addUser = async (input: UserInput) => {
    return this.create(input).save();
  };
  updateUser = async (id: number, input: UserInput) => {
    return this.update({ id }, input);
  };
  deleteUser = async (id: number) => {
    return this.delete({ id });
  };
}
