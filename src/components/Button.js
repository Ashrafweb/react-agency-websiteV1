import React from "react"
import './Button.css';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large','btn--mobile','btn--wide'];

const COLORS =['primary','red','blue','green'];

export const Button = ({children,type,onClick,buttonStyle,buttonColor,buttonSize })=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ?
    buttonStyle : STYLES[0] ;

    const checkButtonColor = COLORS.includes(buttonColor) ?
    buttonColor : null;

    const checkButtonSize = SIZES.includes(buttonSize) ?
    buttonSize : SIZES[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}
        ${checkButtonColor}`} onClick={onClick}
        type={type}>{children}</button>
    )
}