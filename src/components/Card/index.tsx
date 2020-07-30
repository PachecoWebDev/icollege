import React from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

export interface CardProps {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  code?: string;
  cpf?: string;
  birth?: string;
  gender?: string;
  email?: string;
  phone?: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  name,
  code,
  cpf,
  birth,
  gender,
  email,
  phone,
}) => {
  return (
    <Container>
      {Icon && <Icon size={50} />}
      <span>{name}</span>
      {name && (
        <div className="card-description">
          <p>Código: {code}</p>
          <p>CPF: {cpf}</p>
          <p>Data de nascimento: {birth}</p>
          <p>Gênero: {gender}</p>
          <p>E-mail: {email}</p>
          <p>Telefone: {phone}</p>
        </div>
      )}
    </Container>
  );
};

export default Card;
