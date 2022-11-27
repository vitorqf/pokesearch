import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { InfiniteScroll } from 'react-infinite-scroll-comp';
import ScrollToTop from 'react-scroll-to-top';

import { queryProps } from '../../pages';
import { Loading } from '../Loading';
import { Search } from '../Search';
import { Container, PokeListContainer, PokeListItem } from './styles';

interface Pokemon {
  name: string;
  url: string;
}


interface PokeListProps {
  data: queryProps
}

const InfiniteScrollStyle = {
  overflow: 'hidden',
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(8.5rem, 1fr))',

  alignItems: 'center',

  gap: '1rem'
}

export function PokeList({ data }: PokeListProps) {

  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Search the pokemon name into SSR data
  const filteredList =
    search.length > 0
      ? data.results.filter(pokemon =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
      
  // POS takes the last index of pokeList
  // RES fetches data from SSR from POS to POS + 100
  // then sets poke list to already existing ones and fetched ones
  async function getMorePoke() {
    const pos = pokeList.length
    const res = data.results.slice(pos, pos + 100)

    setPokeList(poke => [...poke, ...res])
  }

  useEffect(() => {
    const init = data.results.slice(0, 100)
    setPokeList(init)
    setLoading(false)
  }, [data.results])


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
                    <Loading />
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
            hasMore={data.count > pokeList.length}
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
                    <Loading />
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
      <ScrollToTop
        smooth
        width='20'
      />
    </Container>
  );
}
