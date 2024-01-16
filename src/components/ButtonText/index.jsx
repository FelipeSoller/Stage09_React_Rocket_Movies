import PropTypes from 'prop-types'

import { Container } from './styles'

export const ButtonText = ({ title, icon: Icon }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <p>{title}</p>
    </Container>
  )
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func
}