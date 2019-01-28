import React, { MouseEventHandler } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import globalTheme from '../../theme';

const theme = createMuiTheme(globalTheme);

export interface IFlatButtonProps {
  children?: React.ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
}

export const FlatButton = (props: IFlatButtonProps) => {
  const { children, disabled, onClick } = props;
  return (
  <MuiThemeProvider theme={theme}>
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  </MuiThemeProvider>
  )
}
