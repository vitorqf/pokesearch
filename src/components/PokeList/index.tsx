import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { InfiniteScroll } from 'react-infinite-scroll-comp';
import ScrollToTop from 'react-scroll-to-top';

import { Loading } from '../Loading';
import { Search } from '../Search';
import { Container, PokeListContainer, PokeListItem, Skeleton } from './styles';

interface Pokemon {
  name: string;
  url: string;
}

interface DataProps {
  data: {
    name: string;
    url: string;
  }[];
}

const InfiniteScrollStyle = {
  overflow: 'hidden',
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(8.5rem, 1fr))',

  alignItems: 'center',

  gap: '1rem'
}

export function PokeList({ data }: DataProps) {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokeList) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [pokeList]);

  const filteredList =
    search.length > 0
      ? data.filter(pokemon =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  async function getMorePoke() {
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${pokeList.length}`
      )
      .then(res => setPokeList(pokes => [...pokes, ...res.data.results]));
  }

  return (
    <Container>
      <Search
        search={search}
        setSearch={setSearch}
      />
        {search.length > 0 ? (
        <PokeListContainer>

          {filteredList.map(pokemon => {
            return (
              <Link
                title={pokemon.name}
                href={`${pokemon.name}`}
                key={pokemon.name}
              >
                  {loading ? (
                    <Skeleton className='pulse' />
                  ) : (
                    <PokeListItem>
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                          pokemon.url.split('/')[6]
                        }.png`}
                        alt={`${pokemon.name} icon`}
                        width={80}
                        height={80}
                      />
                      <span>{pokemon.name}</span>
                    </PokeListItem>
                  )}
              </Link>
            );
          })}
        </PokeListContainer>
        ) : (
        <InfiniteScroll
            callBack={() => getMorePoke()}
            containerStyle={InfiniteScrollStyle}
            useTopScroll={false}
            dataLength={pokeList.length}
            next={getMorePoke}
            hasMore={data.length > pokeList.length}
            endMessage={<p>You have finished!</p>}
            Loader={<Loading />}
        >
          {pokeList?.map(pokemon => {
            return (
              <Link
                href={`${pokemon.name}`}
                key={pokemon.name}
              >
                  {loading ? (
                    <Skeleton className='pulse' />
                  ) : (
                    <PokeListItem>
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                          pokemon.url.split('/')[6]
                        }.png`}
                        alt={`${pokemon.name} icon`}
                        width={96}
                        height={96}
                      />
                      <span>{pokemon.name}</span>
                    </PokeListItem>
                  )}
              </Link>
            );
          })}
        </InfiniteScroll>
        )}
      {/* </PokeListContainer> */}
      <ScrollToTop
        smooth
        width='20'
      />
    </Container>
  );
}
