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
  width: 100%;

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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    margin: 50px auto;

    div + div {
      margin: 0;
    }

    h4 {
      margin: 20px 0 5px 0;
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
export const Title = styled.h1`
  color: #000;
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    th {
      color: #f27a54;
      font-weight: normal;
      padding: 20px 32px;
      font-size: 24px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      text-align: center;

      &.title {
        color: #363f5f;
      }

      a {
        font-size: 24px;
        color: #f27a54;
      }

      button {
        background: none;
        border: none;

        svg {
          font-size: 24px;
          color: #f27a54;
          transition: color 0.2s;
        }

        &:hover svg {
          color: #c53030;
        }
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
