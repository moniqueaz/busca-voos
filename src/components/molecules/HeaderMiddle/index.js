import React from 'react';
import styled from 'styled-components';

import { FaAlignLeft, FaCoins, FaQuinscape, FaUser } from 'react-icons/fa';

const HeaderMiddleContainer = styled.div``;
const Menu = styled.ul``;
const MenuItem = styled.li``;

const HeaderMiddle = _ => {
  return (
    <HeaderMiddleContainer>
      <h1>Middle</h1>
    </HeaderMiddleContainer>
  );
};

export default HeaderMiddle;
