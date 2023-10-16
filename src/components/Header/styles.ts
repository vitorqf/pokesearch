import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  color: ${({ theme }) => theme.primary};
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  a:nth-child(2) {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const LogoContainer = styled.section`
  > a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 600;
    font-size: 1.25rem;

    > span {
      color: ${({ theme }) => theme.primary};
      > span {
        color: #000;
      }
    }
  }
`;
