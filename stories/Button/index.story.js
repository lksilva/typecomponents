import React from 'react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ButtonMD from './README.md';

import { FlatButton } from '../../src/Button';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonMD))
  .addDecorator(withNotes('Button estilizado com Material-UI a partir do ThemeProvider'))
  .add('FlatButton', () => (
    <FlatButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'FlatButtom')}
    </FlatButton>
  ));
