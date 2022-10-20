import { MagnifyingGlass } from 'phosphor-react';
import { Container, ContainerHeader, InputContainer } from './styles';

export function Search() {
  return (
    <Container>
      <ContainerHeader>
        <InputContainer>
          <MagnifyingGlass size={32} />
          <input type="search" name="" id="" placeholder='Search...'/>        
        </InputContainer>
      </ContainerHeader>
    </Container>
  );
}
