import { repositoryMemoryUser } from "./repository.memory.user.ts";
import { TypeUser } from "./user.contracts.ts";

const saveUser = (u: TypeUser) => {
  const data = u;
  return repositoryMemoryUser.create(data);
};

export { saveUser };
