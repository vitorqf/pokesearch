import { lighten } from 'polished';
import styled from 'styled-components';

import theme from '../../styles/theme';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerHeader = styled.header`
    padding-block: 1rem;
    display: flex;
    justify-content: flex-start;
`
export const InputContainer = styled.div`
    display: flex;
    flex: 0;
    align-items: center;
    gap: 0.65rem;
    padding: 0.25rem 1rem;
    border-radius: 0.35rem;
    background-color: ${({theme}) => lighten(0.025, theme.background)};
    transition: all 200ms ease-in-out;

    > input {
        font-size: 1rem;
        outline: none;
        background-color: transparent;
        border: none;
        padding: 0.5rem 0.25rem;
    }

    &:focus-within {
        background-color: ${({theme}) => theme.primary};
        color: white;

        > input {
            color: white;
        }

        > input::placeholder {
            opacity: 0;
        }
    }
`