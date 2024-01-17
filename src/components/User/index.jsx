import PropTypes from 'prop-types';
import { FiClock } from 'react-icons/fi';

import { Container, Wrap } from './styles'

export const User = ({ user, createdAt }) => {
  console.log(createdAt);
  return(
    <Container>
        <Wrap>
          <img
            src="https://github.com/felipesoller.png"
            alt="Github profile avatar"
          />
          <strong>Por {user}</strong>
        </Wrap>
        <Wrap>
          <FiClock size={16}/>
          <strong>{createdAt}</strong>
        </Wrap>
    </Container>
  )
}

User.propTypes = {
  user: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};