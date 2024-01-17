import { Header } from '../../components/Header'

import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { Rating } from '../../components/Rating'
import { User } from '../../components/User'

import { Container, Content, Title } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export const Details = () => {
  const formattedDate = new Date().toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const data = { title: 'The Fast and the Furious', description: 'Los Angeles police officer Brian OConner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.', created_at: formattedDate.replace(',', ' às'), rating: 5, tags: [{ id: '1', name: 'Action' }, { id: '2', name: 'Crime' }, { id: '3', name: 'Thriller' }], user: 'Felipe Soller'}

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <ButtonText title={'Back'} icon={FiArrowLeft} />
          </div>

          <Title>
            <h1>
              {data.title}
            </h1>
            <Rating rating={data.rating} bigStar />
          </Title>

          <User user={data.user} createdAt={data.created_at}/>

          <Section>
            {
              data.tags &&
              <footer>
                {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name} detailTag/>)
                }
              </footer>
            }
          </Section>

          <p>
            {data.description}
          </p>
        </Content>
      </main>
    </Container>
  )
}