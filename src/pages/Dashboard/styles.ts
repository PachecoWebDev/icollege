import styled from 'styled-components';

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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  a {
    text-decoration: none;
    color: #000;

    &:hover div {
      border-color: #f08d32;
    }
  }
`;
