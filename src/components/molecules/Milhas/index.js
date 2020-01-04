import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

import { FaEye } from 'react-icons/fa';
// import PriceInfo from '../../molecules/Items';

const Milhas = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 50%;
  }`;

const MilhasComponet = _ => {
  return (
    <Milhas>
      <Button className="neutral">
        <FaEye></FaEye>
        Milhas
      </Button>
    </Milhas>
  );
};

export default MilhasComponet;
