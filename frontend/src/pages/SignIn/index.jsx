import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

import { Container, Login, Image } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
	return (
		<Container>
			<Login>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir.</p>

				<h2>Faça seu login</h2>
				<Input type="email" placeholder="E-mail" icon={HiOutlineMail} />
				<Input type="password" placeholder="Senha" icon={HiOutlineLockClosed} />

				<Button title="Entrar" />
				<ButtonText to="/register" title="Criar conta" />
			</Login>

			<Image />
		</Container>
	);
}
