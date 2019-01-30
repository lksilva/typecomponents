import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import readme from "./README.md";

import { FlatButton } from "../../src/Button";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(readme))
  .addDecorator(withNotes("The best FlatButtom"))
  .add("FlatButton", () => (
    <FlatButton
      onClick={action("clicked")}
      disabled={boolean("Disabled", false)}
    >
      {text("Label", "FlatButtom")}
    </FlatButton>
  ));
