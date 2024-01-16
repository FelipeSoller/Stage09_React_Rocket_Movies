import PropTypes from 'prop-types'

import { Container } from './styles'

export const Input = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.func
}