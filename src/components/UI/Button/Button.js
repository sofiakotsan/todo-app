import React from "react";

const Button = ({children, style, ...props}) => {
    let  buttonStyle = style ? 'button--' + style : 'button--filled';
    return (
        <button className={`button ${buttonStyle}`}>
            {children}
        </button>
    );
}

export default Button;