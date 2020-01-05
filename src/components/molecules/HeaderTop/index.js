import React from 'react';
import styled from 'styled-components';
import { device, colors, font } from '../../../style/variaveis';

import {
  FaAlignLeft,
  FaCoins,
  FaQuestion,
  FaUser,
  FaClock,
} from 'react-icons/fa';

const HeaderTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px;
  border-bottom: 2px solid ${colors.gray};
  svg {
    color: ${colors.primary};
  }
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${font.mobile.lg};
  font-weight: bold;
  color: ${colors.secondary};
  flex: 0 0 auto;
  svg {
    margin-right: 5px;
  }
`;
const Hour = styled.span`
  border: 1px solid ${colors.infor};
  border-radius: 2px;
  padding: 10px 20px;
  font-weight: 500;
  flex: 0 0 auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${colors.secondary};

  @media ${device.laptop} {
    display: none;
  }

  svg {
    color: ${colors.secondary};
    margin-right: 5px;
    vertical-align: middle;
  }
`;
const Menu = styled.ul`
  display: none;
  flex: 0 0 auto;
  padding: 0 30px;
  @media ${device.laptop} {
    display: block;
  }
`;
const MenuItem = styled.li`
  display: inline-block;
  padding: 0 30px;
  font-size: ${font.desktop.xs};
  svg {
    margin-right: 5px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
`;
const now = new Date();

const HeaderTop = _ => {
  return (
    <HeaderTopContainer>
      <Logo>
        <FaAlignLeft />
        Teste Front
      </Logo>
      <Hour>
        <FaClock />
        {`${now.getHours()} : ${now.getMinutes()}`}
      </Hour>
      <Menu>
        <MenuItem>
          <FaCoins />
          Venda sua milhar
        </MenuItem>
        <MenuItem>
          <FaQuestion />
          Tire suas duvidas
        </MenuItem>
        <MenuItem>
          <FaUser />
          Login ou cadastro
        </MenuItem>
      </Menu>
    </HeaderTopContainer>
  );
};

export default HeaderTop;
