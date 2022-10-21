import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Search } from '../Search';
import { Container, PokeListContainer, PokeListItem } from './styles';

interface Pokemon {
  name: string;
  url: string;
}

export function PokeList() {
  const [pokeList, setPokeList] = useState<Pokemon[]>([])
  const [search, setSearch] = useState('')

  const filteredList = search.length > 0 ? pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())) : [];

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then(res => setPokeList(res.data.results))
  }, [])

  console.log('Render')

  return (
    <Container>
      <Search search={search} setSearch={setSearch}/>
      <PokeListContainer>
        {search.length > 0 ? (
          filteredList.map((pokemon) => {
            return (
              <Link href={`${pokemon.name}`} key={pokemon.name}>
                <a>
                  <PokeListItem>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.url.split('/')[6]}.png`} alt={`${pokemon.name} icon`} width={100} height={100} />            
                    <span>{pokemon.name}</span>
                  </PokeListItem>
                </a>
              </Link>
            )
          })
        ) : (
          pokeList.map((pokemon) => {
            return (
              <Link href={`${pokemon.name}`} key={pokemon.name}>
                <a>
                  <PokeListItem>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.url.split('/')[6]}.png`} alt={`${pokemon.name} icon`} width={100} height={100} />            
                    <span>{pokemon.name}</span>
                  </PokeListItem>
                </a>
              </Link>
            )
          })
        ) 
        }
      </PokeListContainer>
    </Container>
  );
}
