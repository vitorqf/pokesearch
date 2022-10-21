import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Container, ContainerHeader, InputContainer } from './styles';

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export function Search({search, setSearch}: SearchProps) {

  return (
    <Container>
      <ContainerHeader>
        <InputContainer>
          <MagnifyingGlass size={32} />
          <input type="search" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} value={search}/>        
        </InputContainer>
      </ContainerHeader>
    </Container>
  );
}
