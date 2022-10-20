import styled from 'styled-components';

import theme from '../../styles/theme';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    color: ${({theme}) => theme.primary};
`;

export const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ul {
        display: flex;
        gap: 1rem;

        > li {
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
`

export const LogoContainer = styled.section`
    > a {
        color: ${({theme}) => theme.primary};
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 600;
        font-size: 1.25rem;

        > span {
            > span {
                color: black;
            }
        }
    }
`