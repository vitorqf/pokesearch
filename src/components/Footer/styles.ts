import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    margin-top: 0.5rem;
    padding-block: 1rem;

    > span {
        > a {
            color: ${({theme}) => theme.primary};
            transition: color 350ms ease;

            &:hover {
                color: ${({theme}) => darken(0.2, theme.primary)}
            }
        }
    }
`;
