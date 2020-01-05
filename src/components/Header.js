import React from 'react';
import styled from 'styled-components';

import HeaderTop from './molecules/HeaderTop';
import HeaderMiddle from './molecules/HeaderMiddle';

const HeaderContainer = styled.div`
  z-index: 2;
`;

const Header = _ => {
  return (
    <HeaderContainer>
      <HeaderTop />
      <HeaderMiddle />
    </HeaderContainer>
  );
};

export default Header;
