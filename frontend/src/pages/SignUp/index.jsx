import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiArrowLeft } from "react-icons/hi";
import { api } from "../../services/api";

import { Container, Register, Image } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill all the fields!");
    }

    api
      .post("/users", { name, email, password })
      .then(alert("User successfully registered!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("It was not possible to register...");
        }
      });
  }

  return (
    <Container>
      <Register>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          type='text'
          placeholder='Nome'
          icon={HiOutlineUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='email'
          placeholder='E-mail'
          icon={HiOutlineMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Senha'
          icon={HiOutlineLockClosed}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title='Cadastrar' onClick={handleSignUp} />
        <ButtonText icon={HiArrowLeft} title='Voltar para o login' onClick={handleBack} />
      </Register>
      <Image />
    </Container>
  );
}
