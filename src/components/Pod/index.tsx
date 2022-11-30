import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { DataProps } from '../PokeInfo';
import { Container, InfoContainer, PokeContainer, PokeBackground, WeekPokeInfo, AbilitiesContainer } from './styles';
import { TypeBadge, TypeBadgeItem } from '../PokeInfo/styles';
import Link from 'next/link';
import { ArrowArcRight, ArrowFatRight, ArrowRight } from 'phosphor-react';

interface PodProps {
  name: string;
  url: string;
}

export function Pod({name, url}: PodProps) {
  const [pokeData, setPokeData] = useState<DataProps>()

  useEffect(() => {
    axios.get(url).then(res => setPokeData(res.data))
  })

  function formatPokeInfo(data: number | undefined) {
    if (typeof(data) === 'number') { 
      data = data / 10
      return data
    }

    return 'invalid info'
  }
  
  return (
    <Container>
      <PokeContainer>

        <header>
          <TypeBadge>
            {pokeData?.types.map(type => {
              return (
                <TypeBadgeItem
                  type={type.type.name}
                  key={type.type.name}
                >
                  {type.type.name}
                </TypeBadgeItem>
              );
            })}
          </TypeBadge>
        </header>
          

        <PokeBackground>
          <div className="floating">
            <Image
              src={pokeData?.sprites.front_default || pokeData?.sprites.front_shiny || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png` }
              alt={`${name} icon`}
              width={80}
              height={80}
            />
          </div>
        </PokeBackground>
      
        <section>
          <span>#{pokeData?.id }</span>
          <h2>{name}</h2>
        </section>

      </PokeContainer>

      <WeekPokeInfo type={pokeData?.types[0].type.name || ''}>
        <AbilitiesContainer>
          <h2>Abilities</h2>
          {pokeData?.abilities.map(item => {
            return (
              <p key={item.ability.name}>{item.ability.name}</p>
            )
          })}
        </AbilitiesContainer>

        
        <InfoContainer>
          <h2>Body Info</h2>
          <div>
            <section>
              <h3>Height</h3>
              <span>
                {formatPokeInfo(pokeData?.height)} m
              </span>
            </section>

            <section>
              <h3>Weight</h3>
              <span>
                {formatPokeInfo(pokeData?.weight)} kg
              </span>
            </section>
          </div>
        </InfoContainer>

        <Link href={`/${name}`}>
          View stats
        </Link>
      </WeekPokeInfo>
      
    </Container>
  );
}
