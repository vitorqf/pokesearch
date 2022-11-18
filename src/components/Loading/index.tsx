import { CircleNotch } from 'phosphor-react';

import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <CircleNotch weight="bold" size={24} />
    </Container>
  );
}
