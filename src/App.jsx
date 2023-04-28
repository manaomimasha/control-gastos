import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'



function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarmodal, setAnimarmodal] = useState(false)
  const [gastos, setGastos] = useState([])


  const handleNuevogasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarmodal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    // gasto.fecha= Date.now()
    setGastos([...gastos, gasto])

    setAnimarmodal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);

    
  }
  
  console.log(gastos)

  return (
    <>
    

      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}

            />
          </main>

          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto}
              alt="IconoNuevGasto"
              onClick={handleNuevogasto} />
          </div>

        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarmodal={animarmodal}
        setAnimarmodal={setAnimarmodal}
        guardarGasto={guardarGasto}
      />}

    </>
  )
}

export default App
