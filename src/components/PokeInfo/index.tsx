import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Container, PokeHeader, StatItem, StatusContainer, TypeBadge, TypeBadgeItem } from './styles';

interface PokeInfoProps {
  pokemon: string | string[] | undefined;
}

interface DataProps {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      }
      is_hidden: boolean;
      slot: number;
    }
  ]
  base_experience: number;
  id: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      }
    }
  ]
  sprites: {
    front_default: string;
    front_shiny: string;
  }
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      }
    }
  ]
}

export function PokeInfo({pokemon}: PokeInfoProps) {
  const [data, setData] = useState<DataProps>()
  const [version, setVersion] = useState(true);

  useEffect(() => { pokemon && axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => setData(res.data)) }, [pokemon])
  
  console.log(data?.types)
  return (
    <Container>
      <PokeHeader>
        <div>
        <span>{data?.sprites.front_shiny ? 'Click on pokemon to switch sprite!' : 'No shiny sprite available'}</span>
          <Image 
            onClick={() => setVersion(!version)}
            src={
              (version ? data?.sprites.front_default : data?.sprites.front_shiny) || ''
            } 
            alt={`${pokemon} image`} 
            width={200} 
            height={200} 
            className="floating"
          />
        </div>
        <div>
          <h1>{pokemon}</h1>
          <TypeBadge>
            {data?.types.map(type => {
              return (
                <TypeBadgeItem type={type.type.name} key={type.type.name}>{type.type.name}</TypeBadgeItem>
              )
            })}
          </TypeBadge>
          <StatusContainer>
            <h2>Base Stats</h2>
            {data?.stats.map(stat => {
              return (
                <StatItem color={stat.stat.name} size={stat.base_stat} key={stat.stat.name}>
                  <span>{stat.stat.name}</span>
                  <div>
                    <span>{stat.base_stat}</span>
                  </div>
                </StatItem>
              )
            })}
          </StatusContainer>
        </div>
      </PokeHeader>
    </Container>
  );
}
