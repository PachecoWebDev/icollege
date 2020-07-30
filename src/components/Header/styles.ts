import styled from 'styled-components';

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  padding: 20px;
  border-radius: 30px;
  margin: 20px auto;

  > img {
    height: 100px;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: #d0d0d0;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #d0d0d0;
    }

    strong {
      color: #f08d32;
    }
  }
`;
