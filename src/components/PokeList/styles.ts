import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const PokeListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`

export const PokeListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8.5rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => lighten(0.025, theme.background)};
    overflow: hidden;

    > span {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 600;
        line-height: 2;
        color: white;
        background-color: #00000075;
    }

    &:hover {
        scale: 105%;
    }

    @media (max-width:700px) {
        width: calc(50% - 0.8rem);
    }
`