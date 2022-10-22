import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { InfiniteScroll } from 'react-infinite-scroll-comp';

import { Search } from '../Search';
import { Container, PokeListContainer, PokeListItem } from './styles';

interface Pokemon {
  name: string;
  url: string;
}

interface DataProps {
  data: {
    name: string;
    url: string;
  }[]
}

export function PokeList({data}: DataProps) {
  const [pokeList, setPokeList] = useState<Pokemon[]>([])
  const [search, setSearch] = useState('')

  const filteredList = search.length > 0 ? data.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())) : [];

  async function getMorePoke() {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${pokeList.length}`).then(res => setPokeList(pokes => [...pokes, ...res.data.results])) 
  }

  return (
    <Container>
      <Search search={search} setSearch={setSearch}/>
      <PokeListContainer>
        {search.length > 0 ? (
          filteredList.map((pokemon) => {
            return (
              <Link href={`${pokemon.name}`} key={pokemon.name} passHref>
                <a>
                  <PokeListItem>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={`${pokemon.name} icon`} width={80} height={80} />            
                    <span>{pokemon.name}</span>
                  </PokeListItem>
                </a>
              </Link>
            )
          })
        ) : (
          <InfiniteScroll
            callBack={() => getMorePoke()}
            containerStyle={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%/3, max(8rem, 100%/20)), 1fr))',
              gap: '1rem',
              overflowX: 'hidden'
            }}
            useTopScroll={false}
            dataLength={pokeList.length}   
            next={getMorePoke}
            hasMore={data.length > pokeList.length}
            endMessage={
              <p>You have finished!</p>
            }
          >
            {pokeList?.map((pokemon) => {
            return (
              <Link href={`${pokemon.name}`} key={pokemon.name}>
                <a>
                  <PokeListItem>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={`${pokemon.name} icon`} width={80} height={80} />            
                    <span>{pokemon.name}</span>
                  </PokeListItem>
                </a>
              </Link>
            )
            })}
          </InfiniteScroll>
        ) 
        }
      </PokeListContainer>
    </Container>
  );
}
