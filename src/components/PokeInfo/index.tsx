import Image from 'next/image';
import { Container, PokeCard } from './styles';
import {Carousel} from 'react-responsive-carousel'

interface PokeInfoProps {
  imageUrl: {
    front_default: string;
    front_shiny: string;
  } | undefined;
}

export function PokeInfo({imageUrl}: PokeInfoProps) {
  return (
    <Container>
      <PokeCard>
        <div>
          <Image className='floating' src={imageUrl?.front_default || ''} alt={""} width={200} height={200}/>
        </div>
        <section>

        </section>
      </PokeCard>
    </Container>
  );
}
