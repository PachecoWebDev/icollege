import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const fromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: ${fromRight} 1s;

  form {
    width: 100%;
    max-width: 700px;
    margin: 80px 0;
    text-align: center;
    padding: 0 80px;

    div + div {
      margin-top: 0;
    }

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#000')};
      }
    }
  }

  > a {
    color: #f08d32;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f08d32')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
