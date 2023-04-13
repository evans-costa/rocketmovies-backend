import {
  HiArrowLeft,
  HiOutlineCamera,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

import { Container, Form, Profile } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function User() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPasword] = useState();

  async function handleUpdateProfile() {
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword,
    };

    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <ButtonText
          to='/'
          icon={HiArrowLeft}
          title='Voltar'
        />
      </header>

      <Form>
        <Profile>
          <img
            src='https://github.com/evans-costa.png'
            alt='Foto de perfil'
          />
          <label htmlFor='avatar'>
            <HiOutlineCamera />
            <input
              type='file'
              id='avatar'
            />
          </label>
        </Profile>

        <Input
          type='text'
          placeholder='Nome'
          icon={HiOutlineUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='email'
          placeholder='Email'
          icon={HiOutlineMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Senha atual'
          icon={HiOutlineLockClosed}
          onChange={(e) => setOldPasword(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Nova senha'
          icon={HiOutlineLockClosed}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button
          title='Salvar'
          onClick={handleUpdateProfile}
        />
      </Form>
    </Container>
  );
}
