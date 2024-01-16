import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background, Title } from './styles'

export const SignUp = () => {
  return (
    <Container>
      <Form>
        <Title >
          <h1>React Rocket Movies</h1>
          <p>Application to record the movies that you watched</p>
          <h2>Sign Up</h2>
        </Title>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />

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

        <Button title="Register" />

        <ButtonText title="Back to login" icon={FiArrowLeft} />
      </Form>
      <Background />
    </Container>
  )
}