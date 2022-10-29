import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button } from "./style";

export const About = () => {

    let { nome } = useParams()
    let navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    const styleInline = {
        background: "#f0f", color: "#FFF", textAlign: "center"
    }

    return (
        <>
            <h1> Tela Sobre</h1>
            <h3 style={styleInline}>Usuário logado:{nome}</h3>
            <h2>Quem somos?</h2>
            <h3> Somo uma turma de react Js</h3>
            <Button cor="#C793e1" onClick={() => handleClick()}>Voltar para home</Button>
        </>
    )
}