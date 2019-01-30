import React, { MouseEventHandler } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import theme from '../../theme';

const providerTheme = createMuiTheme(theme);

export interface IFlatButtonProps {
  children?: React.ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
}

export const FlatButton = (props: IFlatButtonProps) => {
  const { children, disabled, onClick } = props;
  return (
    <MuiThemeProvider theme={providerTheme}>
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
