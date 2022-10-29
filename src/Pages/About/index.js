import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Container, InfoUsuario } from "./style";

export const About = () => {

    let { nome } = useParams()
    let navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }


    return (
        <Container>
            <h1> Tela Sobre</h1>
            <InfoUsuario>
                <h3 >Usuário logado:{nome}</h3>
            </InfoUsuario>
            <h2>Quem somos?</h2>
            <h3> Somo uma turma de react Js</h3>
            <Button cor="#C793e1" onClick={() => handleClick()}>Voltar para home</Button>
        </Container>
    )
}