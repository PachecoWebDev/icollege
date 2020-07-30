import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f7;
  border: 2px solid #f5f5f7;
  border-radius: 8px;
  padding: 16px;
  min-height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  transition: border-color 0.2s;

  > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  span {
    font-size: 24px;
    margin: 20px auto;
  }

  .card-description {
    p {
      padding: 10px 0;
    }
  }
`;
