import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './README.md';

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(readme))
