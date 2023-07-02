import React, { useEffect, useState } from 'react'
import { Container, Description,ProfileFormContact, Left, Profile, ProfileContact, ProfileDescription, ProfileImg, Right, Thumb } from './styles'
import TopBanner from '../../components/TopBanner'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import Api, { urlApi } from '../../services/Api'
import { toast } from 'react-toastify'

import { useParams } from "react-router-dom";

export default function Imobi() {
  const { slug } = useParams();
  const [dataimobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((response) => {
        setDataImobi(response.data);
      })
      .catch(() => {
        console.log('Erro ao listar imóvel');
      });
  },[]); //slug

  const { tipo, cidade, endereco, telefone, descricao, thumb, name,email, userId } = dataimobi;

  const [client_name, setClienteName] = useState('');
  const [client_email, setClienteEmail] = useState('');
  const [client_mensagem, setClienteMensagem] = useState('');

  const dataMessage = {
    client_name,
    client_email,
    client_mensagem,
    userId
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    Api.post('/createmessage', dataMessage)
      .then((response) => {
        if(!response.data.error === true) {
          toast(response.data.message);
        } else {
          toast(response.data.message);
        }
      }).catch(() => {
        console.log('Erro: Erro no sistema');
      })
  }

  return (
    <div>
      <TopBanner
        tipo={tipo}
        descricao={descricao}
        thumb={thumb}
      />
      <Container>
        <Left>
          <Thumb>
              <img src={`${urlApi}/uploads/${thumb}`} alt="" />
            <Description>
              <h2>{tipo}</h2>
              <h5>Cidade: {cidade}</h5>
              <h5>Endereço: {endereco}</h5>
              <p>{descricao}</p>
            </Description>
          </Thumb>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>{name}</h3>
              <p>Descrição do Usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações Para Contato: </h3>
            <p>{telefone}</p>
            <p>{email}</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o Anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
            <Input
                type="hidden"
                name="userId"
                value={userId}
              />
              <Input
                type="text"
                name="client_name"
                placeholder="Nome: "
                onChange={(e) => setClienteName(e.target.value)}
              />
              <Input
                type="text"
                name="client_email"
                placeholder="E-mail: "
                onChange={(e) => setClienteEmail(e.target.value)}
              />
              <TextArea
                placeholder="Mensagem: "
                onChange={(e) => setClienteMensagem(e.target.value)}
              />
              <Button>Enviar Mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </div>
  )
}
