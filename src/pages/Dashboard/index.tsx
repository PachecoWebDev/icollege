import React from 'react';
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsers,
  FaClipboardList,
  FaGraduationCap,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/students">
          <Card name="Cadastro de alunos" icon={FaUserGraduate} />
        </Link>
        <Link to="/teachers">
          <Card name="Cadastro de professores" icon={FaChalkboardTeacher} />
        </Link>
        <Link to="/subjects">
          <Card name="Cadastro de disciplinas" icon={FaClipboardList} />
        </Link>
        <Link to="/courses">
          <Card name="Cadastro de cursos" icon={FaGraduationCap} />
        </Link>
        <Link to="/classes">
          <Card name="Cadastro de turmas" icon={FaUsers} />
        </Link>
      </Content>
    </Container>
  );
};

export default Dashboard;
