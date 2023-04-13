import { Container } from "./styles";
import { HiStar, HiOutlineStar } from "react-icons/hi";

export function Star({ rating, size }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <HiStar
          key={i}
          size={size}
        />
      );
    } else {
      stars.push(
        <HiOutlineStar
          key={i}
          size={size}
        />
      );
    }
  }

  return (
    <Container
      rating={rating}
      size={size}
    >
      {stars}
    </Container>
  );
}
