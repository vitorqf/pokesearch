import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const PokeListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(8rem, 100%/20)), 1fr));
    gap: 1rem;

    > div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(8rem, 100%/20)), 1fr));
        gap: 1rem;
        

        @media (min-width: 700px) {
            justify-content: center;
        }   


        > a {
            display: flex;
        }
    }
`

export const PokeListItem = styled.div`
    min-width: 8.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => lighten(0.025, theme.background)};
    overflow: hidden;

    > span {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        line-height: 1.5;
        font-size: 0.65rem;
        font-weight: 600;
        padding-block: 0.5rem;
        color: white;
        background-color: #00000075;
    }

    &:hover {
        scale: 105%;
    }
`