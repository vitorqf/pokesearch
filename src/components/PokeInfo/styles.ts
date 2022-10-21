import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`

`;

export const PokeCard = styled.div`
    display: flex;
    > div {
        padding: 5rem;
        border-radius: 0.5rem;
        background-color: ${({theme}) => lighten(0.025, theme.background)}
    }
`