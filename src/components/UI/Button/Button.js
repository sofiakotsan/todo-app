import React from "react";
import './Button.css';

const Button = ({children, style, ...props}) => {
    let  buttonStyle = style ? 'button--' + style : 'button--filled';
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            <span>
                {children}
            </span>
        </button>
    );
}

export default Button;