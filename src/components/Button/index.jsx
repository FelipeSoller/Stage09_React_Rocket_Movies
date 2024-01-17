import PropTypes from 'prop-types';

import { Container } from './styles'

export const Button = ({ title, loading = false, icon: Icon, remove }) => {
  return(
    <Container
      type='button'
      disabled={loading}
      remove={remove}
    >
      {Icon && <Icon size={20} />}
      { loading ? 'Carregando...' : title }
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.func,
  remove: PropTypes.bool
};