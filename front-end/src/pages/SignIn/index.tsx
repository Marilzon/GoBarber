import React from 'react';

import logoSvg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-Mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha!</a>
      </form>

      <a href="login">Cadastrar!</a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
