import { HiArrowLeft } from "react-icons/hi";

import { Container, Content, Bookmarks, ButtonWrapper } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";

export function NewMovie() {
	return (
		<Container>
			<Header />
			<Content>
				<ButtonText to="/" icon={HiArrowLeft} title="Voltar" />

				<Section className="new-movie" title="Novo filme">
					<div className='input-wrapper'>
						<Input type="text" placeholder="Título" />
						<Input type="text" placeholder="Sua nota (de 0 a 5)" />
					</div>
					<TextArea placeholder="Observações" />
					<Bookmarks>
						<h3>Marcadores</h3>
						<div className='tags'>
							<NewTag value="React" />
							<NewTag isNew placeholder="Novo marcador" />
						</div>
					</Bookmarks>

					<ButtonWrapper>
						<Button isDelete title='Excluir Filme' />
						<Button title='Salvar Alterações' />
					</ButtonWrapper>
				</Section>
			</Content>
		</Container>
	);
}
