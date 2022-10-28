import React from "react";

export const IndiretoFilho = (props) => {

    return (
        <>
            <h3>Filho</h3>
            <button onClick={() =>
                props.funcaoInfo("Carlos", 72, true)}>
                Enviar informações</button>
        </>
    )
}