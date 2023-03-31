import { Container } from "./styles";

export function ButtonText ({icon : Icon, title , value,...rest}) {
  return (
    <Container { ...rest }>
      {Icon && <Icon size={16} />}
      <a href={value}>{title}</a>
    </Container>
  )
} 