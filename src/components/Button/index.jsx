import PropTypes from 'prop-types';

import { Container } from './styles'

export const Button = ({ title, loading = false, icon: Icon }) => {
  return(
    <Container
      type='button'
      disabled={loading}
    >
      {Icon && <Icon size={20} />}
      { loading ? 'Carregando...' : title }
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.func
};