import React from "react";

const bouton = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.css}`
    return <button
        className={btnCss}
        onClick={props.clic}
        style={props.estSelection ? {opacity:1} : {opacity:0.7}}
        >
        {props.children}
    </button>
};

export default bouton;