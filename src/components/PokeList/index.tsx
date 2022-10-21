import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container, PokeListItem } from './styles';

export function PokeList() {
  const [pokeList, setPokeList] = useState([])
  const [isApiFetching, setIsApiFetching] = useState(false)

  useEffect(() => {
    setIsApiFetching(true)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then(res => setPokeList(res.data.results))
    setIsApiFetching(false)
  }, [])

  return (
    <Container>
      {pokeList.map((pokemon, index) => {
        return (
          <PokeListItem key={pokemon.name}>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${index+1}.png`} alt={`${pokemon.name} icon`} width={80} height={80}/>            
            <span>{pokemon.name}</span>
          </PokeListItem>
        )
      })}
    </Container>
  );
}
