import React from 'react'
import { Container, Description, Img, Items } from './styles'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { urlApi } from '../../services/Api';

export default function Card({ thumb, tipo, endereco, valor, slug }) {
  return (
    <Container>
      <Img>
        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
      </Img>
      <Description>
        <h4>{tipo}</h4>
        <Items>
          <span><FaMapMarkerAlt />{endereco}</span>
          <span>R$ {valor}</span>
        </Items>
        <Link to={`/imovel/${slug}`}> Detahes <FaArrowRight /></Link>
      </Description>
    </Container>
  )
}
