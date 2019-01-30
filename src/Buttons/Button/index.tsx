import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { MouseEventHandler } from "react";

import theme from "../../themes/button";

export interface IAvecButtonProps {
  children?: React.ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "default" | "primary" | "secondary" | undefined;
}

export const AvecButton = (props: IAvecButtonProps) => {
  const { children, disabled, onClick, variant, color } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Button
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        color={color}
      >
        {children}
      </Button>
    </MuiThemeProvider>
  );
};
