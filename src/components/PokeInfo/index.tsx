import axios from 'axios';
import { Container } from './styles';
import { useState, useEffect } from 'react';

interface PokeInfoProps {
  pokemon: string | string[] | undefined;
}

export function PokeInfo({pokemon}: PokeInfoProps) {
  const [data, setData] = useState()

  useEffect(() => { pokemon && axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => setData(res.data)) }, [pokemon])
  
  console.log(data)
  return (
    <Container>
      <h1>{}</h1>
    </Container>
  );
}
