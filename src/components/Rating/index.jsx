import PropTypes from 'prop-types'

import { Container } from "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export const Rating = ({ rating, bigStar }) => {
  const starSize = bigStar ? 20 : 12

  const stars = Array.from({ length: 5 }, (_, i) => {
    const StarComponent = i < rating ? VscStarFull : VscStarEmpty;

    return <StarComponent key={i+1} size={starSize} />;
  });

  return <Container>{stars}</Container>;
}

Rating.propTypes = {
  rating: PropTypes.number,
  bigStar: PropTypes.bool
}