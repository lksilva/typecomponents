import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { FlatButton } from '../../src/Button';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add(
  "FlatButton",
  withInfo({ inline: true })(() => (
    <FlatButton
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
    >{text('Label', 'FlatButtom')}</FlatButton>
  )),
);

// storiesOf('Components/Button', module).addWithJSX(
//   'basic PrimaryButton',
//   () => (
//     <FlatButton
//       disabled={boolean('disabled', false)}
//       onClick={() => alert('hello there')}
//     >{text('Label', 'FlatButtom')}</FlatButton>
//   ),
//   {
//     info: {
//       text: `

//   ### Notes

//   light button seen on <https://zpl.io/aM49ZBd>

//   ### Usage
//   ~~~js
//   <PrimaryButton
//     label={text('label', 'Enroll')}
//     disabled={boolean('disabled',false)}
//     onClick={() => alert('hello there')}
//   />
//   ~~~

// `,
//     },
//   }
// );