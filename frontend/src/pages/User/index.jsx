import {
  HiArrowLeft,
  HiOutlineCamera,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

import { Container, Form, Profile } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function User() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPasword] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword,
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
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
            src={avatar}
            alt='Foto de perfil'
          />
          <label htmlFor='avatar'>
            <HiOutlineCamera />
            <input
              type='file'
              id='avatar'
              onChange={handleChangeAvatar}
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
