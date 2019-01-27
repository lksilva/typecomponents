import React, { MouseEventHandler } from 'react';
import './FlatButton.css';

/**
 * FlatButtonProps properties.
 */
export interface IFlatButtonProps {
  children?: React.ReactNode;
  disabled: Boolean;
  onClick: MouseEventHandler;
}

export const FlatButton = (props: IFlatButtonProps) => (
<div className={props.disabled ? "disabled" : "button"}>
  <button onClick={props.onClick}>
    {props.children}
  </button>
</div>)

