import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarmodal, setAnimarmodal }) => {

    const [nombre, setNombre] = useState("")

    const [cantidad, setCantidad] = useState("")

    const handleCerrar = () => {
        setAnimarmodal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
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



            <form className={`formulario ${animarmodal ? "animar" : "cerrar "} `}>

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

                    <label htmlFor="cant"> Selecciona una categoría </label>
                    <select name="" id="">

                        <option value=""> --SELECIONA--  </option>

                        <option value="casa">CASA  </option>

                        <option value="casa">OCIO  </option>

                        <option value="casa">TRANSPORTE  </option>

                        <option value="casa">SUSCRIPCIONES  </option>
                    </select>

                    <input type="submit" value="AÑADIR Gasto" />

                </div>

            </form>



        </div>
    )
}

export default Modal
