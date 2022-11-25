import axios from 'axios';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { PokeList } from '../components/PokeList';

export interface queryProps {
  data: {
    count: number;
    next: string;
    previous: string;
    results: [
      {
        name: string;
        url: string;
      }
    ]
  }
}


export default function Home(props: queryProps) {
  return (
    <div className='container'>
      <Meta
        title='PokéSearch'
        description='This is a page where all pokémon are listed to be searched and get more info about them'
        keywords='pokemon pokémon pokedex pokeinfo'
      />
      <Header />
      <PokeList data={props.data} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const data: queryProps = await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(res => res.data);

  return {
    props: {
      data,
    },
    revalidate: 604800,
  };
};
