import React, { useEffect, useState } from 'react'
import {Header, Wrapper } from './styles'
import Card from '../../components/Card'
import Banner from '../../components/Banner';
import Api from '../../services/Api';

export default function Home() {
  const [imobi, setImobi] = useState([]);
  useEffect(()=>{
    Api.get('/listimobi')
      .then((response) => {
        setImobi(response.data);
      })
      .catch(() => {
        console.log("Erro: Erro no Sistema");
      });
  },[]);

  return (
    <div>
      <Banner />
      <Header>
        <h2>Find the property of your dreams!</h2>
      </Header>
      <Wrapper>
        {imobi.map(items => (
          <Card
            key={items.id}
            thumb={items.thumb}
            tipo={items.tipo}
            endereco={items.endereco}
            valor={items.valor}
            slug={items.slug}
          />
        ))}
      </Wrapper>
    </div>
  )
}
