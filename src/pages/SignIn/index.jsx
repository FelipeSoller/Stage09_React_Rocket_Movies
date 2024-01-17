import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background, Title } from './styles'

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <Title >
          <h1>React Rocket Movies</h1>
          <p>Application to record the movies that you watched</p>
          <h2>Sign In</h2>
        </Title>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Enter" />

        <ButtonText title="Sign Up" linkTo="/register" />
      </Form>
      <Background />
    </Container>
  )
}