import { Container, Content, NewNote } from "./styles";
import { HiPlus } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header
        value={search}
        setSearch={setSearch}
      />
      <main>
        <Content>
          <div>
            <h2>Meus filmes</h2>
            <NewNote to='/new'>
              <HiPlus size={24} />
              Adicionar Filme
            </NewNote>
          </div>

          <Section>
            <div className='notes'>
              {notes.map((note) => (
                <Note
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  rating={note.rating}
                  tags={note.tags}
                />
              ))}
            </div>
          </Section>
        </Content>
      </main>
    </Container>
  );
}
