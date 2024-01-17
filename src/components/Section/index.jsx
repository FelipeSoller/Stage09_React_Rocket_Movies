
import { FiPlus } from 'react-icons/fi'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles'

export const Section = ({ title, children, hasButton = false, buttonTitle }) => {
  return (
    <Container>
      <div>
        <h2>{ title }</h2>
        {hasButton && (
          <Link to="/new">
            <FiPlus />
            <span>{ buttonTitle }</span>
          </Link>
        )}
      </div>
      { children }
    </Container>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  hasButton: PropTypes.bool,
  buttonTitle: PropTypes.string
};