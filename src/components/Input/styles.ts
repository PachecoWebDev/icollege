import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f5f7;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f5f5f7;
  color: #84777d;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #f08d32;
      border-color: #f08d32;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #f08d32;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    width: 100%;

    &::placeholder {
      color: #84777d;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
