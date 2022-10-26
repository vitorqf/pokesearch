import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    p {
      line-height: 1.5;
      text-align: justify;
    }

    a {
      color: ${({ theme }) => theme.primary};
    }

    > section {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      > ul {
        padding-inline: 1rem;
        > li {
          font-size: 90%;
          line-height: 2;
          list-style: disc;
        }
      }
    }
  }
`;
