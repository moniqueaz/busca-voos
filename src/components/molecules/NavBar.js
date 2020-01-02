import Link from 'next/link';
import styled from 'styled-components';
import Button from '../atoms/Button/index';

const Nav = styled.ul`
  font-size: 50px;
`;

function Navbar() {
  return (
    <Nav>
      <li>
        <Link href="/">
          <a>Index</a>
        </Link>
      </li>
      <Button>Pesquisar</Button>
      <Button />
    </Nav>
  );
}

export default Navbar;
