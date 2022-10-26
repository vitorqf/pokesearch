import { useRouter } from 'next/router';

import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { PokeInfo } from '../components/PokeInfo';

export default function Pokemon() {
  const router = useRouter();
  const pokemon = router.query.pokemon;

  return (
    <div className='container'>
      <Meta
        title='Pokemon Info'
        description='This is a page where is described pokemon info such as stats and type'
        keywords='pokemon pokedex pokeinfo'
      />
      <Header />
      <PokeInfo pokemon={pokemon} />
    </div>
  );
}
