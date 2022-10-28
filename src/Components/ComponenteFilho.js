import React from "react";

export const ComponenteFilho = (props) => {

    return (
        <>
            <h2>Oi sou o {props.nome}</h2>
            <h3>tenho {props.idade} anos</h3>
            <h3>{props.vascaino ? "Sou vascão" : " Sou feliz"}</h3>
        </>
    )
}