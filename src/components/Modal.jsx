import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarmodal, setAnimarmodal }) => {

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

            <form className={`formulario ${ animarmodal ? "animar" : "cerrar "} ` }>
                <legend> Nuevo Gasto </legend>
            </form>
        </div>
    )
}

export default Modal
