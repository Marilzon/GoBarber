import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import logoSvg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-Mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha!</a>
      </form>

      <a href="login">Cadastrar!</a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
