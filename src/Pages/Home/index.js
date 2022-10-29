import React, { useState } from "react";
import { Link } from "react-router-dom"

import { Button } from "../About/style";

export const Home = () => {

    const [usuario, setUsuario] = useState({
        nome: "Matheus",
        idade: 23
    })

    return (
        <>
            <h1> Tela home</h1>
            <Link to={`/quemsomos/${usuario.nome}`}>
                <Button cor="red">Ir para pagina quem somos</Button>
            </Link>
        </>
    )
}