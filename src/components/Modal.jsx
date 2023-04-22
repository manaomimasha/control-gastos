import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal }) => {

    const handleCerrar = () => {
        setModal(false)
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
        </div>
    )
}

export default Modal
