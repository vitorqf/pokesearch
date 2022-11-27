import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1.5rem;
    gap: 3rem;

    text-transform: uppercase;

    letter-spacing: .25rem;

    > div {
        margin: 0;

        > img {
            transform: scale(1.5);
        }
    } 
`
