import IStudentRepository, { User } from '../IUsersRepository';

class UsersRepository implements IStudentRepository {
  private users: User[] = [
    {
      name: 'Anderson',
      code: '123456',
      cpf: '12345678910',
      birth: '12/34/5678',
      gender: 'Masculino',
      email: 'anderson@anderson.com',
      phone: '(12)3.4567-8910',
      password: '123456789',
    },
    {
      name: 'Anderson Pacheco',
      code: '123456',
      cpf: '12345678911',
      birth: '12/34/5678',
      gender: 'Masculino',
      email: 'anderson2@anderson.com',
      phone: '(12)3.4567-8910',
      password: '123456789',
    },
    {
      name: 'Anderson Pacheco Oliveira',
      code: '123456',
      cpf: '12345678912',
      birth: '12/34/5678',
      gender: 'Masculino',
      email: 'anderson3@anderson.com',
      phone: '(12)3.4567-8910',
      password: '123456789',
    },
  ];

  public async getAll(): Promise<User[] | undefined> {
    return this.users;
  }

  public async findStudent(finder: string): Promise<User | undefined> {
    console.log(finder);
    const findStudentByName = this.users.find(users => users.name === finder);

    if (!findStudentByName) {
      const findStudentbycode = this.users.find(users => users.code === finder);
      console.log(findStudentbycode);

      if (!findStudentbycode) {
        const findStudentByCpf = this.users.find(
          users => users.cpf === '12345678912',
        );
        console.log(findStudentByCpf);

        return findStudentByCpf;
      }

      return findStudentbycode;
    }
    console.log(findStudentByName);
    return findStudentByName;
  }

  public async save(student: User): Promise<User> {
    const findIndex = this.users.findIndex(
      findStudent => findStudent.cpf === student.cpf,
    );

    if (findIndex === -1) {
      this.users.push(student);
    } else {
      this.users[findIndex] = student;
    }
    return student;
  }

  public async login(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = this.users.find(
      userLogin => userLogin.email === email && userLogin.password === password,
    );

    return user;
  }
}

export default UsersRepository;
