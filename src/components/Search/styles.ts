import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerHeader = styled.header`
  padding-block: 1rem;

  display: flex;
  justify-content: flex-start;
`;
export const InputContainer = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;

  gap: 0.65rem;
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
  
  background-color: ${({ theme }) => lighten(0.025, theme.background)};
  transition: all 200ms ease-in-out;

  > input {
    width: 100%;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0.5rem 0.25rem;
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.primary};
    color: white;

    > input {
      color: white;
    }

    > input::placeholder {
      opacity: 0;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
