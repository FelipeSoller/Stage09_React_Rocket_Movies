import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { TagItem } from '../../components/TagItem'
import { Button } from '../../components/Button'

import { Container, Form, BackButton, Wrap } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'

export const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <BackButton>
            <ButtonText title={'Back'} icon={FiArrowLeft} />
          </BackButton>
          <header>
            <h1>New Movie</h1>
          </header>

          <Wrap>
            <Input placeholder="Title" />
            <Input placeholder="Rating (0 to 5)" />
          </Wrap>
          <TextArea placeholder="Description" />

          <Section>
            <h3>Tags</h3>
            <div className="tags">
              <div className="wrapperTags">
                <TagItem value="Action" />
                <TagItem isNew placeholder="New tag" />
              </div>
            </div>
          </Section>

          <Wrap>
            <Button title="Delete" remove/>
            <Button title="Save" />
          </Wrap>
        </Form>
      </main>
    </Container>
  )
}