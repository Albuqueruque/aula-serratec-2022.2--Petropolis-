import React, { useState } from "react";

export const RenderizacaoCondicional = () => {

    const [isLogado, setIsLogado] = useState(false)

    function SaudacaoUsuario() {
        return (<h1> Bem-vindo de volta!</h1>)
    }

    function SaudacaoVisitante() {
        return (<h1> Por favor, registre-se</h1>)
    }

    function logar() {
        setIsLogado(true)
    }

    return (
        <>
            {isLogado ? <SaudacaoUsuario /> : <SaudacaoVisitante />}
            <button onClick={() => logar()}>{isLogado ? "Logoff" : "Login"}</button>
        </>
    )
}