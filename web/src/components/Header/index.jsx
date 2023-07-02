import React from 'react';
import LogoImg from '../../assets/logo.png';
import { Container, Logo, Menu } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {

  const userLogged = localStorage.getItem('Yt');
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  }

  return (
    <Container>
      <Logo>
        <Link to={'/'}>
          <img src={LogoImg} alt="" />
        </Link>
      </Logo>
      <Menu>
        <ul>
          { !userLogged ?
            <li><Link to={'/login'}><span>Cadastro/Login</span></Link></li>
            :
            <li><Link to={'/'} onClick={handleLogout} ><span>Sair</span></Link></li>
          }

        </ul>
      </Menu>
    </Container>

  )
}
