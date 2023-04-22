import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarmodal, setAnimarmodal] = useState(false)
  

  const handleNuevogasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarmodal(true)
    }, 500);
  }

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto}
            alt="IconoNuevGasto"
            onClick={handleNuevogasto} />
        </div>
      )}

      { modal && <Modal
      setModal= {setModal} 
      animarmodal= {animarmodal}
      setAnimarmodal={setAnimarmodal}
      /> }

    </>
  )
}

export default App
