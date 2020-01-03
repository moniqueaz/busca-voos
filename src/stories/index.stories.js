import React from 'react';
import Button from '../components/atoms/Button';
import BestPrice from '../components/atoms/BestPrice';
import ListPrice from '../components/atoms/ListPrice';
import Infor from '../components/atoms/Infor';
import PriceInfo from '../components/molecules/PriceInfo';
import GridHeader from '../components/molecules/GridHeader';

import { storiesOf } from '@storybook/react';
import { FaSearch, FaChevronDown, FaPlus } from 'react-icons/fa';

storiesOf('Button', module)
  .add('EmptyButton', () => <Button />)
  .add('SearchButton', () => (
    <Button>
      <FaSearch />
      Pesquisa
    </Button>
  ))
  .add('BestPriceButton', () => <Button>R$ 240,20</Button>)
  .add('GhostButton', () => <Button className="ghost" />)
  .add('GhostIconButton', () => (
    <Button className="ghost">
      <FaPlus /> Detalhes do voo
    </Button>
  ))
  .add('TextButtonDefault', () => <Button className="text" />)
  .add('TextButtonWhite', () => <Button className="text white" />)
  .add('TextButtonBlack', () => <Button className="text black" />)
  .add('TextIcon', () => (
    <Button className="text">
      Button
      <FaChevronDown />
    </Button>
  ));

storiesOf('BestPriceButton', module).add('BestPriceButton', () => (
  <BestPrice>240,20</BestPrice>
));

storiesOf('ListPrice', module).add('Price', () => (
  <ListPrice listPrice="R$ 400,00" airlines="gol" />
));

storiesOf('Infor', module)
  .add('InforDefault', () => <Infor>Teste</Infor>)
  .add('InforWarning', () => <Infor className="orange">Teste</Infor>);

storiesOf('PriceInfo', module).add('PriceInfo', () => (
  <PriceInfo>
    <ListPrice listPrice="R$ 400,00" airlines="gol" />
    <BestPrice>240,20</BestPrice>
    <Infor>Teste</Infor>
  </PriceInfo>
));

storiesOf('GridHeader', module).add('GridHeader Default', () => (
  <GridHeader className="grid-header">
    <Button className="text white">
      Button
      <FaChevronDown />
    </Button>
    <Button className="text white">
      Button
      <FaChevronDown />
    </Button>
    <Button className="text white">
      Button
      <FaChevronDown />
    </Button>
  </GridHeader>
));
