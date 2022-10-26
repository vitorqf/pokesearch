import axios from 'axios';
import { Container, PokeHeader, TypeBadge, TypeBadgeItem } from './styles';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
}

export function PokeInfo({pokemon}: PokeInfoProps) {
  const [data, setData] = useState<DataProps>()

  useEffect(() => { pokemon && axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => setData(res.data)) }, [pokemon])
  
  console.log(data?.types)
  return (
    <Container>
      <PokeHeader>
        <div>
          <Image 
            src={data?.sprites.front_default || ''} 
            alt={`${pokemon} image`} 
            width={240} 
            height={240} 
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
        </div>
      </PokeHeader>
    </Container>
  );
}
