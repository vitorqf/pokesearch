import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { PokeInfo } from '../components/PokeInfo';

interface PokemonDataProps {
    name: string;
    id: number;
    sprites: {
      front_default: string;
      front_shiny: string;
    }
    stats: {
      base_stat: number;
      effort: 0;
      stat: {
        name: string;
        url: string;
      }
    }[];
}

export default function Pokemon() {
  const router = useRouter()
  const pokemon = router.query.pokemon

  const [pokeData, setPokeData] = useState<PokemonDataProps>()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => setPokeData(res.data))
  }, [])

  return (
    <div className="container">
      <Header />
      <PokeInfo imageUrl={pokeData?.sprites}/>
    </div>
  );
}
