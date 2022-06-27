import React, { useState } from 'react'

export const MiComponente = ({miNumero}) => {

    const [contador, setContador] = useState (1);
     const sumar = () => {
         setContador(contador + 1);
      
}

const restar = () => {
    setContador (contador - 1)
}

return (
    <>
        <h1> MiComponente</h1>
        <h1> {contador} </h1>
        <button onClick={sumar}>Agregar</button>
        <button onClick={restar}>Quitar</button>

    </>
    )
}