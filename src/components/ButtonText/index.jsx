import PropTypes from 'prop-types'

import { Container } from './styles'
import { Link } from 'react-router-dom'

export const ButtonText = ({ title, icon: Icon, linkTo }) => {
  return (
    <Container>
      <Link to={linkTo}>
        {Icon && <Icon size={20} />}
        <p>{title}</p>
      </Link>
    </Container>
  )
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func,
  linkTo: PropTypes.string
}