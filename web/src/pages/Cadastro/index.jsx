import React, { useState } from 'react'
import { Container, ContainerForm, Form, Label } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import Api from '../../services/Api';
import { toast } from 'react-toastify';

export default function Cadastro() {

  const [ data, setData ] = useState({
    name: '',
    email: '',
    password: ''
  });

  const InputValue = (e) => setData({
    ...data, [e.target.name]: e.target.value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post('/createusers', data)
      .then((response) => {
        if(!response.data.error === true) {
          toast(response.data.message);
        } else {
          toast(response.data.message);
        }
       })
      .catch(() => { console.log('Erro: Erro no sistema! Tente mais tarde') });
    //console.log(data);
  }

  return (
    <Container>
      <h2>Crie sua Conta</h2>
      <p>Cadastre-se para acessar a plataforma</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>Nome</Label>
          <Input type="text" name="name" placeholder="Informe seu Nome" onChange={InputValue} />
          <Label>E-mail</Label>
          <Input type="text" name="email" placeholder="Informe seu E-mail" onChange={InputValue} />
          <Label>Senha</Label>
          <Input type="password" name="password" placeholder="Informe sua Senha" onChange={InputValue} />
          <Button>Fazer Cadastro</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}
