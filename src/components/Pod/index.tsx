import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { DataProps } from '../PokeInfo';
import { Container, PokeContainer } from './styles';

interface PodProps {
  name: string;
  url: string;
}

export function Pod({name, url}: PodProps) {
  const [pokeData, setPokeData] = useState<DataProps>()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(res => setPokeData(res.data))
  })
  
  return (
    <Container>
      <PokeContainer>
        <h1>Weeklymon</h1>
        <div className="floating">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png`}
            alt={`${name} icon`}
            width={80}
            height={80}
          />
        </div>
        <h2>{name}</h2>
      </PokeContainer>
    </Container>
  );
}
