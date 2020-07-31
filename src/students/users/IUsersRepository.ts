import { IconBaseProps } from 'react-icons/lib';

export interface User {
  icon?: React.ComponentType<IconBaseProps>;
  name?: string;
  code?: string;
  cpf?: string;
  birth?: string;
  gender?: string;
  email?: string;
  phone?: string;
  password?: string;
}

export default interface IUsersRepository {
  getAll(): Promise<User[] | undefined>;
  findStudent(name: string): Promise<User | undefined>;
  save(user: User): Promise<User | undefined>;
  login(email: string, password: string): Promise<User | undefined>;
}
