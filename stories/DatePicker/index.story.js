import React from 'react';
// import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ButtonMD from './README.md';

import { DatePicker } from '../../src/Date';

storiesOf('Date', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonMD))
  .addDecorator(withNotes('The best DatePicker'))
  .add('DatePicker', () => (
    <DatePicker />
  ));
