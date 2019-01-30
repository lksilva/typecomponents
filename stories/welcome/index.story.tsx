import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withDocs } from "storybook-readme";

import readme from "./README.md";

storiesOf("Welcome", module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(readme));
