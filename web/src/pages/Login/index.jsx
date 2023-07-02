import React, { useState } from 'react'
import { Container, ContainerForm, Form, Label } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AppAuth } from '../../context/AppAuth';

export default function Login() {
  const auth = AppAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log({email, password});
    await auth.authenticate(email, password);
  }

  return (
    <Container>
      <h2>Acesse sua Conta</h2>
      <p>Entre com seu e-mail e senha</p>
      <ContainerForm>
        <Form onSubmit={handleLogin} autoComplete="off" >
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}
