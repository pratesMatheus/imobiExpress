import React from 'react';
import LogoImg from '../../assets/logo.png';
import { Container, Item, Copy } from './styles';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <nav>
            <li><span><FaFacebook size={32}/></span></li>
            <li><span><FaInstagram size={32}/></span></li>
            <li><span><FaWhatsapp size={32}/></span></li>
          </nav>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
        <Item>
          <h3>Useful Links</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
        <Item>
          <h3>Contacts Info</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>© Copyright 2022 - Workside Tecnologia All Rights Reserveds</p>
        <ul>
          <li><span>Termos de Uso</span></li>
          <li><span>Política de Privacidade</span></li>
          <li><span>Política de Cookies</span></li>
        </ul>
      </Copy>
    </div>
  )
}
