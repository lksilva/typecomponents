import React, { MouseEventHandler } from 'react';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';

// const styles = (theme: any) => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

/**
 * FlatButtonProps properties.
 */

export interface IFlatButtonProps {
  children?: React.ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  // classes?: any;
}

export const FlatButton = (props: IFlatButtonProps) => {
  const { children, disabled, onClick } = props;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      color="secondary"
    >
      {children}
    </Button>
  )
}

// export default withStyles(styles)(FlatButton);
