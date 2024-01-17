import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Avatar } from "./styles";

export const Profile = () => {
  return (
    <Container>
      <header>
        <ButtonText title="Back" icon={FiArrowLeft} linkTo={'/'} />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/felipesoller.png"
            alt="User avatar"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

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
          placeholder="Current password"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
        />

        <Button title="Save" />
      </Form>
    </Container>
  )
}