import React from 'react'

const Input = ({ onChange, box }) => {
    return (
        <div className='flexDiv'>
            <label htmlFor='color'>Color:
                <select id="color" className='selectInpt' name="color" onChange={onChange}>
                    <option value="black">Negro</option>
                    <option value="red">Rojo</option>
                    <option value="blue">Azul</option>
                    <option value="orange">Naranja</option>
                    <option value="pink">Rosado</option>
                    <option value="turquoise">Turquesa</option>
                    <option value="green">Verde</option>
                    <option value="gray">Gris</option>
                    <option value="yellow">Amarillo</option>
                </select></label>
            <label htmlFor='height'>Altura:
                <input type="number" name="height" onChange={onChange} min={100} value={box.height} step="5" /></label>
            <label htmlFor='height'>Ancho:
                <input type="number" name="width" onChange={onChange} min={100} value={box.width} step="5" /></label>
            <button type='submit'>Generar</button>
        </div>
    )
}

export default Input