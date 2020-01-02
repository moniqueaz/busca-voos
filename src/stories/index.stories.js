// import React from 'react';
// import { ButtonDefault } from './components/atoms/Button/index';

// export default { text: 'Button' };

// export const withEmoji = () => <Button></Button>;

import React from 'react';
import Button from '../components/atoms/Button/index';
import { storiesOf } from '@storybook/react';

<h1>Atoms</h1>;
storiesOf('Button', module)
  .add('Empty Button', () => <Button />)
  .add('with pesquisa text', () => <Button text="another" />);
