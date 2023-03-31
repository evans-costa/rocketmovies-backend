import { HiArrowLeft } from 'react-icons/hi'

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"

export function NewMovie() {
  return ( 
    <Container>
      <Header />
      <Content>
        <ButtonText 
          icon={HiArrowLeft}
          title="Voltar"
        />
        <Section title="Novo filme">
          <div className='input-wrapper'>
            <Input 
              type="text"
              placeholder="Título"
            />
            <Input 
              type="text"
              placeholder="Sua nota (de 0 a 5)"
            />
          </div>
          <TextArea 
            placeholder="Observações"  
          />
          <h3>Marcadores</h3>
          <div>
            
          </div>

        </Section>
      </Content>
    </Container>
  ) 
}