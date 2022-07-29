import React from "react";
import './Button.css';

const Button = ({children, btnStyle, ...props}) => {
    let  buttonStyle = btnStyle ? 'button--' + btnStyle : 'button--filled';
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            <span>
                {children}
            </span>
        </button>
    );
}

export default Button;