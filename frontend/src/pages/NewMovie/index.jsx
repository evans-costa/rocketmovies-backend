import { HiArrowLeft } from "react-icons/hi";

import { Container, Content, Bookmarks, ButtonWrapper } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevTags) => [...prevTags, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (newTag) {
      return alert("Adicione a tag que está preenchida ou deixe o campo vazio");
    }

    if (!title || !description || !rating) {
      const confirmSave = window.confirm(
        "Tem certeza que deseja salvar o filme sem preencher os campos?"
      );

      if (!confirmSave) {
        return;
      }
    }

    api.post("/movie_notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          to='/'
          icon={HiArrowLeft}
          title='Voltar'
        />

        <Section
          className='new-movie'
          title='Novo filme'
        >
          <div className='input-wrapper'>
            <Input
              type='text'
              placeholder='Título'
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Sua nota (de 0 a 5)'
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder='Observações'
            onChange={(e) => setDescription(e.target.value)}
          />
          <Bookmarks>
            <h3>Marcadores</h3>
            <div className='tags'>
              {tags.map((tag, index) => (
                <NewTag
                  key={index}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
              <NewTag
                isNew
                placeholder='Novo marcador'
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Bookmarks>

          <ButtonWrapper>
            <Button
              isRemove
              title='Cancelar'
            />
            <Button
              title='Salvar filme'
              onClick={handleNewNote}
            />
          </ButtonWrapper>
        </Section>
      </Content>
    </Container>
  );
}
