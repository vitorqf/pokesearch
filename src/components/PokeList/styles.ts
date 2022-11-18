import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr));
  gap: 1rem;

  > div {
    > a {
      display: flex;
      
      > div {
        flex: 1;
        overflow: hidden;
      }
    }
  }
`;

export const PokeListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  overflow: hidden;

  gap: 0.5rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => lighten(0.025, theme.background)};

  > img {
    width: 75%;
  }

  > span {
    display: inline-block;
    text-align: center;

    padding: 0.5rem;
    letter-spacing: 0.05rem;

    width: calc(100%);
    text-transform: uppercase;
    line-height: 1.5;
    font-size: 0.65rem;
    font-weight: 600;

    padding-block: 0.5rem;
    
    color: black;
    background-color: #fff;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    scale: 105%;
  }
`;

export const Skeleton = styled.div`
  min-width: 8.5rem;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => lighten(0.025, theme.background)};
`;
