import PropTypes from 'prop-types';

import { Container } from './styles'

export const Tag = ({ title, detailTag, ...rest }) => {
  return (
    <Container {...rest} detailTag={detailTag}>
      {title}
    </Container>
  )
}

Tag.propTypes = {
  title: PropTypes.string,
  detailTag: PropTypes.bool
};