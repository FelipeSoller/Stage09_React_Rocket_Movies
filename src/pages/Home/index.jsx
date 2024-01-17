import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie'

import { Container, Content } from './styles'

export const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="My movies" buttonTitle={'New movie'} hasButton>
          <Movie data={{ title: 'The Fast and the Furious', description: 'Los Angeles police officer Brian OConner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.', rating: 5, tags: [{ id: '1', name: 'Action' }, { id: '2', name: 'Crime' }, { id: '3', name: 'Thriller' }]}} />

          <Movie data={{ title: '2 Fast 2 Furious', description: 'Former cop Brian OConner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.', rating: 4, tags: [{ id: '1', name: 'Action' }, { id: '2', name: 'Crime' }, { id: '3', name: 'Thriller' }]}} />
        </Section>
      </Content>
    </Container>
  )
}