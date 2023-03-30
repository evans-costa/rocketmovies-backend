import { Container, Content } from "./styles";
import { HiPlus } from 'react-icons/hi'

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Home () {
  return (
    <Container>
      <Header />
        <main>
          <h2>Meus filmes</h2>
          <Button 
            icon={HiPlus}
            title="Adicionar filme"
          />
        </main>

    </Container>
  )
  
}