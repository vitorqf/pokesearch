import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

export const PokeListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8.5rem;
    padding: 1rem;
    gap: 1rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => lighten(0.025, theme.background)};

    > span {
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 600;
    }

    @media (max-width:700px) {
        width: calc(50% - 0.8rem);
    }
`