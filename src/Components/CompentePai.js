import React from "react";
import { ComponenteFilho } from "./ComponenteFilho"

export const ComponentePai = () => {

    return (
        <>
            <h1> Oi sou o ComponentePai</h1>
            <ComponenteFilho
                nome="Matheus"
                idade={23}
                vascaino={false}
            />
        </>
    )
}