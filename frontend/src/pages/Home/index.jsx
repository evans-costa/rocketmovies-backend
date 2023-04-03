import { Container, Content } from "./styles";
import { HiPlus, HiStar } from 'react-icons/hi'

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home () {
  return (
    <Container>
      <Header />
        <main>
          <Content>
            
            <header>
              <h2>Meus filmes</h2>
              <Button 
                icon={HiPlus}
                title="Adicionar filme"
              /> 
            </header>

            <Section>
              <div className="notes">
                <Note 
                  title="Interstellar"
                  icon={HiStar}
                  note="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor ..."
                  tags={[
                    {id: '1', name: 'Ação'},
                    {id: "2", name: "Ficção Científica"}
                  ]}
                />
                <Note 
                  title="Interstellar"
                  icon={HiStar}
                  note="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor ..."
                  tags={[
                    {id: '1', name: 'Ação'},
                    {id: "2", name: "Ficção Científica"}
                  ]}
                />
                <Note 
                  title="Interstellar"
                  icon={HiStar}
                  note="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor..."
                  tags={[
                    {id: '1', name: 'Ação'},
                    {id: "2", name: "Ficção Científica"}
                  ]}
                />
                <Note 
                  title="Interstellar"
                  icon={HiStar}
                  note="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor..."
                  tags={[
                    {id: '1', name: 'Ação'},
                    {id: "2", name: "Ficção Científica"}
                  ]}
                />
              </div>
            </Section>

          </Content>
        </main>
    </Container>
  )
}