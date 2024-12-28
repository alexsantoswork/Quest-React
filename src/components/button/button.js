import React from "react";

function Button (props) {
    const buttonClicked = () => {
        alert(`O Label Desse Botão Está ${props.label}`)
    }
    return (
        <button style={
            {
                padding: '5px 10px', 
                borderRadius: '5px', 
                border: 'none', 
                fontSize: '15px',
                fontWeight: '600',
                textTransform:'uppercase',
                color: 'red',
                cursor: 'pointer'
            }
        } onClick={buttonClicked}>{props.label}</button>
    );
}
export default Button