import Image from 'next/image';
import Link from 'next/link';

import logo from '../../assets/logo.svg';
import { HeaderContainer, LogoContainer, NavContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Link href='/'>
            <a>
              <Image src={logo} alt="Site logo, which is a pokéball" width={36} height={36}/>
              <span>Poké<span>Search</span></span>
            </a>
          </Link>
        </LogoContainer>
        <ul>
          <Link href="/about">
            <a>
              <li className='expand'>About</li>
            </a>
          </Link>
          <Link href="/credits">
            <a>
              <li className='expand'>Credits</li>
            </a>
          </Link>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
