
import { FiPlus } from 'react-icons/fi'
import PropTypes from 'prop-types';

import { Button } from '../../components/Button'

import { Container } from './styles'

export const Section = ({ title, children, hasButton = false, buttonTitle }) => {
  return (
    <Container>
      <div>
        <h2>{ title }</h2>
        {hasButton && (
          <div>
            <Button title={buttonTitle} icon={FiPlus} />
          </div>
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