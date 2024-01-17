import { Input } from '../../components/Input'

import { Container, Profile, Wrap } from "./styles"

export const Header = () => {
  return (
    <Container>
      <h1>
        React Rocket Movies
      </h1>

      <Input placeholder="Search by title" />
      <Profile to='/profile'>
        <Wrap>
          <strong>Felipe Soller</strong>
          <a href="#">Logout</a>
        </Wrap>

        <img
          src="https://github.com/felipesoller.png"
          alt="Github profile avatar"
        />
      </Profile>
    </Container>
  )
}