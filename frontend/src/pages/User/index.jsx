import { HiArrowLeft, HiOutlineCamera, HiOutlineUser, HiOutlineMail, HiOutlineLockClosed} from "react-icons/hi"

import { Container, Form, Profile } from "./styles";

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function User () {
  return (
    <Container>
      <header>
        <ButtonText 
          icon={HiArrowLeft}
          title="Voltar"
        />
      </header>

      <Form>
        <Profile>
          <img 
            src="https://github.com/evans-costa.png" 
            alt="Foto de perfil" 
          />
          <label htmlFor="avatar">
            <HiOutlineCamera />

            <input 
              type="file"
              id="avatar"
            />
          </label>
        </Profile>
        
        <Input 
          type="text"
          placeholder="Nome"
          icon={HiOutlineUser}
        />
        <Input 
          type="email"
          placeholder="Email"
          icon={HiOutlineMail}
        />
        <Input 
          type="password"
          placeholder="Senha atual"
          icon={HiOutlineLockClosed}
        />
        <Input 
          type="password"
          placeholder="Nova senha"
          icon={HiOutlineLockClosed}
        />

        <Button 
          type="submit"
          title="Salvar"
        />
      </Form>
    </Container>
  )
}