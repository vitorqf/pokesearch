import Image from 'next/image';
import Link from 'next/link';

import { HeaderContainer, LogoContainer, NavContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Link href='/'>
              <Image
                src='/logo.svg'
                alt='Site logo, which is a pokéball'
                width={36}
                height={36}
              />
              <span>
                Poké<span>Search</span>
              </span>
          </Link>
        </LogoContainer>
        <Link href='/about'>
            <span className='expand'>About</span>
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}
