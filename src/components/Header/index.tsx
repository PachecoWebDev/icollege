import React from 'react';
import { FiPower } from 'react-icons/fi';

import LogoImg from '../../asstes/iCollege.png';
import { useAuth } from '../../hooks/auth';

import { HeaderContent, Profile } from './styles';

const Header: React.FC = () => {
  const { logout, email } = useAuth();

  return (
    <HeaderContent>
      <img src={LogoImg} alt="iCollege" />

      <Profile>
        <img
          src="https://avatars1.githubusercontent.com/u/12235370?s=460&u=1e4d49d385dbf5a15cc000377f8757a39822c554&v=4"
          alt="Anderson Pacheco"
        />
        <div>
          <span>Bem vindo, </span>
          <strong>{email}</strong>
        </div>
      </Profile>

      <button type="button" onClick={logout}>
        <FiPower />
      </button>
    </HeaderContent>
  );
};

export default Header;
