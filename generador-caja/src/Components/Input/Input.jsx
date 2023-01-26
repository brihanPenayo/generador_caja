import React from 'react'

const Input = ({ onChange, box }) => {
    return (
        <>
        <div className='flexDiv'>
            <select className='selectInpt' name="color" onChange={onChange}>
                <option value="black">Negro</option>
                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="orange">Naranja</option>
                <option value="pink">Rosado</option>
                <option value="turquoise">Turquesa</option>
                <option value="green">Verde</option>
                <option value="gray">Gris</option>
                <option value="yellow">Amarillo</option>
            </select>
            <input type="number" name="height" onChange={onChange} min={100} value={box.height} />
            <input type="number" name="width" onChange={onChange} min={100} value={box.width} />
        </div>
        <button type='submit'>Submit</button>
        </>
    )
}

export default Input