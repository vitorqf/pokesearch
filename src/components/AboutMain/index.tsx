import { GithubLogo, LinkedinLogo } from 'phosphor-react';

import { Container } from './styles';

export function AboutMain() {
  return (
    <Container>
      <section>
        <h2>About the project</h2>
        <p>
          This project was mainly developed to learn concepts about infinite
          loading, such as infinite scroll and pagination.
        </p>
        <section>
          <h3>Tech pack used:</h3>
          <ul>
            <li>Typescript</li>
            <li>NextJS</li>
            <li>Styled Components</li>
            <li>RESTful API</li>
          </ul>
        </section>
      </section>

      <section>
        <h2>About me</h2>
        <p>
          My name is Vitor! I&apos;m a Front-end Developer. You can gather more
          info from me in my <a href='https://vitorrafael.com.br'>portfolio</a>.
          I like doing this kind of project where I can study or get knowledge
          of a specific feature and revisit the already known by me.
        </p>
        <div>
          <a href='https://linkedin.com/in/vitor2806'>
            <LinkedinLogo
              color='red'
              weight='bold'
              size={32}
            />
          </a>
          <a href='https://github.com/vitorqf/'>
            <GithubLogo
              color='red'
              weight='bold'
              size={32}
            />
          </a>
        </div>
      </section>
    </Container>
  );
}
