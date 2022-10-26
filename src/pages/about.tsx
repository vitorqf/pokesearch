import { AboutMain } from '../components/AboutMain';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';

export default function About() {
  return (
    <div className="container">
      <Meta title='About' description='This is a page where I detail myself' keywords='pokemon pokedex pokeinfo'/>
      <Header />
      <AboutMain />
    </div>
  );
}
