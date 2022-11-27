import axios from 'axios';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { Pod } from '../components/Pod';
import { PokeList } from '../components/PokeList';

export interface queryProps {
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

interface HomeProps {
  data: queryProps;
  pod: number;
}

export default function Home({data, pod}: HomeProps) {
  return (
    <div className='container'>
      <Meta
        title='PokéSearch'
        description='This is a page where all pokémon are listed to be searched and get more info about them'
        keywords='pokemon pokémon pokedex pokeinfo'
      />
      <Header />
      <Pod name={data.results[pod].name} url={data.results[pod].url} />
      <PokeList data={data} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const data: queryProps = await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(res => res.data)

  return {
    props: {
      data,
      pod: Math.floor(Math.random() * 1154)
    },
    revalidate: 604800,
  };
};
