import React from 'react';
import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa';

import PopUp from '../../atoms/PopUp';
import Button from '../../atoms/Button';

// import PriceInfo from '../../molecules/Items';

const Filter = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 50%;
`;

const FilterComponet = _ => {
  return (
    <Filter>
      <Button className="neutral">
        <FaFilter />
        Filtrar voos
      </Button>
      <PopUp title="Filter">Conteudo filtro</PopUp>
    </Filter>
  );
};

export default FilterComponet;
