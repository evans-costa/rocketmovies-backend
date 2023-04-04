import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<Container>
			<h1>RocketMovies</h1>
			<Input placeholder="Pesquisar pelo título" type="search" />
			<Profile>
				<div>
					<strong>Evandro Costa</strong>
					<a href="">sair</a>
				</div>
				<Link to="/profile">
					<img src="https://github.com/evans-costa.png" alt="Foto de perfil" />
				</Link>
			</Profile>
		</Container>
	);
}
