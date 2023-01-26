import React, { useState } from 'react'
import Box from '../Box/Box'
import Input from '../Input/Input'

const BoxForm = () => {
    const boxInicial = {
        color: "black",
        height: 100,
        width: 100
    }

    const [cuadro, setCuadro] = useState(boxInicial);
    const [cuadros, setCuadros] = useState([]);

    const handleCuadro = (e) => {
        setCuadro({
            ...cuadro,
            [e.target.name]: e.target.value
        })
    }

    const crearCuadro = (evt) => {
        evt.preventDefault();
        setCuadros([...cuadros, cuadro])
    }

    return (
        <>
            <form onSubmit={crearCuadro}>
                <Input box={cuadro} onChange={handleCuadro} />
            </form>
            <Box box={cuadros} />
        </>
    )
}

export default BoxForm