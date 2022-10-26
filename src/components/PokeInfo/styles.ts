import styled from 'styled-components';

interface TypeBadgeItem {
    type: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const PokeHeader = styled.div`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    padding: 1rem;

    gap: 1rem;
    border-radius: 0.75rem;

    > div:nth-of-type(1) {
        flex: 1;
        
        display: flex;
        justify-content: center;

        padding-block: 5rem;

        background-color: #ffffff95;
        border-radius: 0.5rem;
    }

    > div:nth-of-type(2) {
        flex: 1;
        height: 100%;

        display: flex;
        flex-direction: column;

        > h1 {
            font-size: 1.1rem;
            text-transform: uppercase;

            transition: all 350ms ease-in;

            &:hover {
                color: ${({theme}) => theme.primary};
            }
        }
    }

    @media (max-width: 768px) {
        flex-flow: column wrap;
    }
`;

export const TypeBadge = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;

    margin-block: 0.5rem;
`;

export const TypeBadgeItem = styled.span<TypeBadgeItem>`
    background-color: ${(props) => props.theme.badges[props.type as keyof typeof props.theme.badges]};

    padding: .35rem .5rem;
    
    border-radius: .25rem;
`