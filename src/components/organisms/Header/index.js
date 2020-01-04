import React from 'react';
import styled from 'styled-components';
import Search from '../../molecules/Search';

const Header = styled.div``;

const HeaderComponet = _ => {
  return (
    <>
      <Header>
        <Search />
      </Header>
    </>
  );
};

export default HeaderComponet;
