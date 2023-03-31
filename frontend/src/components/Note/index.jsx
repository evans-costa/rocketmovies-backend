import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ title, icon: Icon , note, tags}) {
  return (
    <Container>
      <h3>{title}</h3>
      {Icon && <Icon size={16} />}
      <p>{note}</p>
      {tags && 
      <footer>
        {tags.map(tag => <Tag key={tag.id} title={tag.name} /> )}
      </footer> }
      
    </Container>
  )
}    