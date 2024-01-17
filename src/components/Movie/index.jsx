import PropTypes from 'prop-types'

import { Rating } from '../Rating'


import { Tag } from '../Tag'

import { Container } from './styles'

export const Movie = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Rating rating={data.rating} />

      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.array,
    rating: PropTypes.number,
    description: PropTypes.string
  }).isRequired
}