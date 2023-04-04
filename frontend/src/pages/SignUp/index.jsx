import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiArrowLeft } from 'react-icons/hi'

import { Container, Register, Image } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button' 
import { ButtonText } from '../../components/ButtonText' 

export function SignUp() {
  return (
    <Container>
      <Register>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input 
          type="text"
          placeholder="Nome"
          icon={HiOutlineUser}
        />
        <Input 
          type="email"
          placeholder="E-mail"
          icon={HiOutlineMail}
        />
        <Input 
          type="password"
          placeholder="Senha"
          icon={HiOutlineLockClosed}
        />

        <Button title="Cadastrar"/>
        <ButtonText 
          icon={HiArrowLeft}
          title="Voltar para o login"
        />
      </Register>
      < Image />
    </Container>
  )
}