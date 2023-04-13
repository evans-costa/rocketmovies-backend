import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

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
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to='/profile'>
          <img
            src={avatarUrl}
            alt={`${user.name} profile picture`}
          />
        </Link>
      </Profile>
    </Container>
  );
}
