import { MagnifyingGlass } from 'phosphor-react';

import { Container, ContainerHeader, InputContainer } from './styles';

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export function Search({ search, setSearch }: SearchProps) {
  return (
    <Container>
      <ContainerHeader>
        <InputContainer>
          <input
            type='search'
            placeholder='Search...'
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <MagnifyingGlass size={28} color={"gray"} />
        </InputContainer>
      </ContainerHeader>
    </Container>
  );
}
