import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { DataProps } from '../PokeInfo';
import { Container, PokeContainer } from './styles';
import { TypeBadge, TypeBadgeItem } from '../PokeInfo/styles';

interface PodProps {
  name: string;
  url: string;
}

export function Pod({name, url}: PodProps) {
  const [pokeData, setPokeData] = useState<DataProps>()

  useEffect(() => {
    axios.get(url).then(res => setPokeData(res.data))
  })
  
  return (
    <Container>
      <PokeContainer>

        <header>
          <h1>Weeklymon</h1>

          <TypeBadge>
            {pokeData?.types.map(type => {
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
        </header>
          

        <div className="floating">
          <Image
            src={pokeData?.sprites.front_default || pokeData?.sprites.front_shiny || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png` }
            alt={`${name} icon`}
            width={80}
            height={80}
          />
        </div>
      
        <section>
          <span>#{pokeData?.id }</span>
          <h2>{name}</h2>
        </section>

      </PokeContainer>
    </Container>
  );
}
