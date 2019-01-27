import React from 'react';
import './Button.css';

/**
 * DefaultButtonProps properties.
 */
export interface IDefaultButtonProps {
  children?: React.ReactNode;
  disabled: Boolean;
}

export const DefaultButton = (props: IDefaultButtonProps) => (
<div className={props.disabled ? "disabled" : "button"}>
  <button>
    {props.children}
  </button>
</div>)