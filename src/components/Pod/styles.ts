import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;

    text-transform: uppercase;

    letter-spacing: .25rem;

    > header {
        display: flex;
        flex-direction: column;
    }

    > div {
        display: flex;
        justify-content: center;

        margin: 0;

        > img {
            height: 100%;
        }
    } 

    > section {
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;

        > span {
            font-family: 'sans';
            font-size: 1.3rem;
            font-weight: bold;
            opacity: 0.3;
        }
    }
`
