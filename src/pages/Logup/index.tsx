import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
  FiHash,
  FiPhone,
  FiUsers,
  FiUserCheck,
  FiFileText,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../asstes/iCollege.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, GridContainer } from './styles';

const Logup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Este campo é obrigatório'),
          id: Yup.string().required('Este campo é obrigatório'),
          cpf: Yup.string().min(11, 'Este campo é obrigatório'),
          birth: Yup.string().required('Este campo é obrigatório'),
          sexo: Yup.string().required('Este campo é obrigatório'),
          email: Yup.string()
            .required('Este campo é obrigatório')
            .email('Digitre um e-mail válido'),
          tel: Yup.string().required('Este campo é obrigatório'),
          password: Yup.string().min(
            8,
            'A senha deve conter no mínimo 8 dígitos',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="iCollege" />
        <h1>Faça seu cadastro</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <GridContainer>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="id" icon={FiHash} placeholder="Código" />
            <Input name="cpf" icon={FiFileText} placeholder="CPF" />
            <Input
              name="birth"
              icon={FiUserCheck}
              placeholder="Data de Nascimento"
            />
            <Input name="sexo" icon={FiUsers} placeholder="Sexo" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="tel" icon={FiPhone} placeholder="Telefone" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
          </GridContainer>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
    </Container>
  );
};

export default Logup;
