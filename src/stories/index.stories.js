import React from 'react';
import Button from '../components/atoms/Button';
import BestPrice from '../components/atoms/BestPrice';
import ListPrice from '../components/atoms/ListPrice';
import TextInfor from '../components/atoms/TextInfor';
import PriceInfo from '../components/molecules/PriceInfo';
import GridHeader from '../components/molecules/GridHeader';

import { storiesOf } from '@storybook/react';
import { FaSearch, FaChevronDown, FaPlus } from 'react-icons/fa';

storiesOf('Button', module)
  .add('EmptyButton', () => <Button />)
  .add('SearchButton', () => <Button serach>Pesquisa</Button>)
  .add('BestPriceButton', () => <Button>R$ 240,20</Button>)
  .add('GhostButton', () => <Button className="ghost" />)
  .add('GhostIconButton', () => (
    <Button className="ghost" plus>
      Detalhes do voo
    </Button>
  ))
  .add('TextButtonDefault', () => <Button className="text" />)
  .add('TextButtonWhite', () => <Button className="text white" />)
  .add('TextButtonBlack', () => <Button className="text black" />)
  .add('TextIcon', () => <Button className="text " arrow />);

storiesOf('BestPriceButton', module).add('BestPriceButton', () => (
  <BestPrice>240,20</BestPrice>
));

storiesOf('ListPrice', module).add('Price', () => (
  <ListPrice listPrice="R$ 400,00" airlines="gol" />
));

storiesOf('TextInfor', module)
  .add('TextInforDefault', () => <TextInfor>Teste</TextInfor>)
  .add('TextInforWarning', () => (
    <TextInfor className="orange">Teste</TextInfor>
  ));

storiesOf('GridHeader', module).add('GridHeader Default', () => (
  <GridHeader className="grid-header" />
));
