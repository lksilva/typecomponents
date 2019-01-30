import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import readme from "./README.md";

import { Button } from "../../src/Buttons/";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(readme))
  .addDecorator(withNotes("The best FlatButtom"))
  .add("Button", () => (
    <div>
      <div
        style={{ justifyContent: "space-between", flexDirection: "row", display: "flex", marginTop: "16px" }}
      >
        <div style={{ width: "30%" }}>
          <Button
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("default", "Default")}
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <Button
            variant="contained"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("default-container", "Default Contained")}
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <Button
            variant="outlined"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("default-outlined", "Default Outlined")}
          </Button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          marginTop: "16px",
        }}
      >
        <div style={{ width: "30%" }}>
          <Button
            color="primary"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("primary", "Primary")}
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("primary-contained", "Primary Contained")}
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <Button
            color="primary"
            variant="outlined"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("primary-outlined", "Primary Outlined")}
          </Button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          marginTop: "16px",
        }}
      >
        <div style={{ width: "30%" }}>
          <Button
            color="secondary"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("secondary", "Secondary")}
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("secondary-contained", "Secondary Contained")}
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={action("clicked")}
            disabled={boolean("Disabled", false)}
          >
            {text("secondary-outlined", "Secondary Outlined")}
          </Button>
        </div>
      </div>
    </div>
  ));
