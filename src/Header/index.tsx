import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo.svg"
import { HeaderContainer, NavContainer, LogoContainer } from './styles';

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
          <li className='expand'>item</li>
          <li className='expand'>item</li>
          <li className='expand'>item</li>
          <li className='expand'>item</li>
          <li className='expand'>item</li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
