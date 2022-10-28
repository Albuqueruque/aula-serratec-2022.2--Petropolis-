import React, { useState } from "react";
import { Exemplo } from './Exemplo';
import { ComponentePai } from "./Components/CompentePai";
import { IndiretoPai } from "./Components/IndiretoPai";

export const App = () => {

  const [nome, setNome] = useState()

  const handleClick = () => {
    if (nome === 'Fulano') {
      setNome("")
    } else {
      setNome("Fulano")
    }
  }

  return (
    <>
      <IndiretoPai />
      {/* <ComponentePai /> */}
      {/* <h1>Boa noite,{nome}</h1>
      <button onClick={handleClick}> Clique aqui</button>
      <Exemplo /> */}
    </>
  )
}
