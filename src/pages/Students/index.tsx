import React, { useRef, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Card, { CardProps } from '../../components/Card';

import { Container, Content } from './styles';

const Students: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [studentsData, setStudentsData] = useState<CardProps[]>([]);

  const handleSubmit = useCallback(() => {
    setStudentsData([
      {
        name: 'Anderson',
        code: '123asd',
        cpf: '123.456.789-12',
        birth: '12/34/5678',
        gender: 'Male',
        email: 'anderson@anderson.com',
        phone: '(12)3.4567-8910',
      },
    ]);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} id="search">
          <h1>Pesquisar</h1>

          <Input
            name="email"
            icon={FaSearch}
            placeholder="Nome, Código ou CPF"
          />

          <Button type="submit">Buscar aluno</Button>
        </Form>
        {studentsData.map(student => (
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            key={student.cpf}
            id="result"
          >
            <h4>Nome:</h4>
            <Input name="name" defaultValue={student.name} />

            <h4>Código:</h4>
            <Input name="code" defaultValue={student.code} />

            <h4>CPF:</h4>
            <Input name="cpf" defaultValue={student.cpf} />

            <h4>Data de nascimento</h4>
            <Input name="picture" defaultValue={student.birth} />

            <h4>Gênero</h4>
            <Input name="picture" defaultValue={student.gender} />

            <h4>E-mail</h4>
            <Input name="picture" defaultValue={student.email} />

            <h4>Telefone</h4>
            <Input name="picture" defaultValue={student.phone} />

            <Button type="submit">Salvar</Button>

            <Button
              type="button"
              // onClick={() => handleDeletestudent(country.id)}
            >
              Excluir
            </Button>
            <Link to="/dashboard">Cancelar</Link>
          </Form>
        ))}
      </Content>
    </Container>
  );
};

export default Students;
