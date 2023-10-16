import styled from 'styled-components';
import pokeball from '../../assets/pokeball.svg';
import { TypeBadgeItem } from '../PokeInfo/styles';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  gap: 1rem;
`;

export const WeekPokeInfo = styled.div<TypeBadgeItem>`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    align-items: center;

    padding: 0.8rem;

    border-radius: 0.5rem;

    background-color: ${props =>
      props.theme.badges[props.type as keyof typeof props.theme.badges]};

    color: white;

    transition: opacity 500ms ease;
    transition: color 750ms ease;

    &:hover {
      opacity: 0.75;
      color: #000;
    }
  }
`;

export const AbilitiesContainer = styled.div`
  text-transform: capitalize;
  line-height: 1.5;

  p {
    font-size: 0.85rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 1.5;

  > div {
    display: flex;
    gap: 1rem;

    span {
      font-size: 0.85rem;
    }
  }
`;

export const PokeBackground = styled.div`
  padding-block: 1rem;

  background: url(${pokeball.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  display: flex;

  align-items: center;
  justify-content: center;

  > div {
    margin: 0;

    object-fit: cover;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-transform: uppercase;

  letter-spacing: 0.25rem;

  > header {
    display: flex;
    flex-direction: column;

    > div {
      margin: 0;
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
`;
