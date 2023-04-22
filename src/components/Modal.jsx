import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarmodal, setAnimarmodal }) => {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")

    const handleCerrar = () => {
        setAnimarmodal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("enviando formulario")
    }

    return (

        <div className="modal">
            <div className='cerrar-modal' >
                <img
                    src={CerrarBtn}
                    alt="CerrarBtn"
                    onClick={handleCerrar}
                />
            </div>



            <form onSubmit={handleSubmit} className={`formulario ${animarmodal ? "animar" : "cerrar "} `}>

                <legend>NUEVO GASTO </legend>

                <div className='campo'  >

                    <label htmlFor="gasto"> Nombre del Gasto  </label>

                    <input type="text"
                        placeholder='NOMBRE DEL GASTO ' id='gasto'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)} />

                </div>

                <div className='campo'  >

                    <label htmlFor="cant"> Cantidad $  </label>

                    <input type="number"
                        placeholder='Cantidad gastada en $' id='cant'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))} />

                </div>

                <div className='campo'  >

                    <label htmlFor="categ"> Selecciona una categoría </label>
                    <select name="" id="categ"
                    
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)} >

                        <option value=""> --SELECIONA--  </option>

                        <option value="casa">CASA  </option>

                        <option value="ocio">OCIO  </option>

                        <option value="transporte">TRANSPORTE  </option>

                        <option value="suscripciones">SUSCRIPCIONES  </option>
                        
                        <option value="comida">COMIDA  </option>
                        
                        <option value="hijos">HIJOS  </option>
                    </select>

                    <input type="submit" value="AÑADIR Gasto" />

                </div>

            </form>



        </div>
    )
}

export default Modal
