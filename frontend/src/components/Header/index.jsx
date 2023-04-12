import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
        placeholder='Pesquisar pelo título'
        type='search'
      />
      <Profile>
        <div>
          <strong>Evandro Costa</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to='/profile'>
          <img
            src='https://github.com/evans-costa.png'
            alt='Foto de perfil'
          />
        </Link>
      </Profile>
    </Container>
  );
}
