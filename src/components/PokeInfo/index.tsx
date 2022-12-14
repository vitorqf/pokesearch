import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Footer } from '../Footer';
import { Loading } from '../Loading';
import { Container, PokeHeader, StatItem, StatusContainer, TypeBadge, TypeBadgeItem } from './styles';

interface PokeInfoProps {
  pokemon: string | string[] | undefined;
}

export interface DataProps {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  id: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
  height: number;
}

export function PokeInfo({ pokemon }: PokeInfoProps) {
  const [data, setData] = useState<DataProps>();
  const [version, setVersion] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    pokemon &&
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => setData(res.data))
        .finally(() => setIsLoading(false))
  }, [pokemon]);

  return (
    <Container>
      <PokeHeader>
        <div>
          {isLoading ? <Loading /> :
          <>
            <span>
              {data?.sprites.front_shiny
                ? 'Click on pokemon to switch sprite!'
                : 'No shiny sprite available'}
            </span>
              <div>
                <Image
                  onClick={() => setVersion(!version)}
                  src={
                    (version
                      ? data?.sprites.front_default
                      : data?.sprites.front_shiny) || ''
                  }
                  alt={`${pokemon} image`}
                  width={240}
                  height={240}
                  quality={100}
                  className='floating'
                  priority={true}
                />
              </div>
          </>
          }
        </div>
        <div>
          <h1>{pokemon}</h1>
          <TypeBadge>
            {data?.types.map(type => {
              return (
                <TypeBadgeItem
                  type={type.type.name}
                  key={type.type.name}
                >
                  {type.type.name}
                </TypeBadgeItem>
              );
            })}
          </TypeBadge>
          <StatusContainer>
            <h2>Base Stats</h2>
            {data?.stats.map(stat => {
              return (
                <StatItem
                  color={stat.stat.name}
                  size={stat.base_stat}
                  key={stat.stat.name}
                >
                  <span>{stat.stat.name}</span>
                  <div>
                    <span>{stat.base_stat}</span>
                  </div>
                </StatItem>
              );
            })}
          </StatusContainer>
        </div>
      </PokeHeader>
      <Footer />
    </Container>
  );
}
