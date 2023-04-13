import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../Star";

export function Note({ title, note, tags }) {
  return (
    <Container>
      <h3>{title}</h3>
      <Star
        rating={5}
        size={16}
      />
      <p>{note}</p>
      {tags && (
        <footer>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              title={tag.name}
            />
          ))}
        </footer>
      )}
    </Container>
  );
}
