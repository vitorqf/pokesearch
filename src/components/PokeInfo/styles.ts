import styled from 'styled-components';

interface TypeBadgeItem {
    type: string;
}

interface StatItem {
    color: string;
    size: number;
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
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-radius: 0.5rem;
        
        img {
            cursor: pointer;
        }
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
    color: white;

    padding: .35rem .5rem;
    
    border-radius: .25rem;

    margin-bottom: 1rem;
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StatItem = styled.div<StatItem>`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 255px;


    > span {
        font-size: 0.8rem;
        text-transform: uppercase;
    }

    > div {
        
        width: 255px;
        background-color: #fff;
        
        margin-bottom: 1rem;
        
        border-radius: 0.35rem;
        
        overflow: hidden;
        
        > span {
            font-size: 0.75rem;

            display: block;
            width: ${(props) => props.size + 'px'};

            padding: 0.25rem 0.5rem;
            background-color: ${(props) => props.theme.stats[props.color as keyof typeof props.theme.stats]};
        }
    }
`;