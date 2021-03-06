import React from 'react';
import './style.scss'

const Button = props => {
    return(
        <button className="btn"type="submit">
            {props.children}
        </button>
    )
}

export default Button