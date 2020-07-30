import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form#search {
    display: flex;
    align-items: center;
    margin: 50px auto;

    h1 {
      margin: 0 20px;
    }

    button {
      margin: 0 20px;
    }
  }

  form#result {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin: 20px 0 5px 0;
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
  }
`;
