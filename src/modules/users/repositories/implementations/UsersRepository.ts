import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.users.find(user => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.users.find(user => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const user: User = {
      ...receivedUser,
      admin: true,
      updated_at: new Date()
    }

    const userIndex = this.users.findIndex(user => user.id === receivedUser.id);

    this.users[userIndex] = user;

    return user;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
