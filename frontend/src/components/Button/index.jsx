import { Container } from "./styles";

export function Button ({ isDelete, title, icon: Icon, ...rest }) {
  return (
    <Container 
      {...rest}
      isDelete={isDelete}
    >
      {Icon && <Icon size={22} />}
      {title}
    </Container>
  )
} 