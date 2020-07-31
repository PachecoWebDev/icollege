import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UsersRepository from '../../students/users/fakes/FakeUsersRepository';
import { User } from '../../students/users/IUsersRepository';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { Container, Content, Title, TableContainer } from './styles';

const Students: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [students, setStudents] = useState<User | undefined>();
  const [allStudentsArray, setAllStudentsArray] = useState<User[] | undefined>(
    [],
  );
  const usersRepository = new UsersRepository();

  useEffect(() => {
    async function loadStudents(): Promise<void> {
      const allStudents = await usersRepository.getAll();

      setAllStudentsArray(allStudents);
    }

    loadStudents();
  }, [usersRepository, students]);

  const handleFindStudent = useCallback(
    async (finder: string) => {
      const student = await usersRepository.findStudent(finder);

      console.log(student);
      setStudents(student);
    },
    [usersRepository],
  );

  return (
    <Container>
      <Header />
      <Content>
        <Title>Pesquisar Aluno</Title>
        <Form ref={formRef} onSubmit={handleFindStudent} id="search">
          <Input
            name="finder"
            icon={FaSearch}
            placeholder="Nome, Código ou CPF"
          />

          <Button type="submit">Buscar aluno</Button>
        </Form>
      </Content>

      <Title>Alunos Cadastrados</Title>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data de nascimento</th>
              <th>Gênero</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {allStudentsArray?.map(student => (
              <tr key={student.cpf}>
                <td>{student.code}</td>
                <td>{student.name}</td>
                <td>{student.cpf}</td>
                <td>{student.birth}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
};

export default Students;
