import { useState } from "react"
import Mensaje  from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

const [mensaje, setMensaje] = useState('')


const handleInputPresupuesto = (e) => {
  e.preventDefault()

  if( !presupuesto || presupuesto < 0 ) {
    setMensaje( 'No es un presupuesto Válido')
   return
  }
  console.log("todobien")
  
  setMensaje('')
  setIsValidPresupuesto(true)
}

  return (

    <div className="contenedor contenedor-presupuesto sombra">
      <form className="formulario"  onSubmit={ handleInputPresupuesto}  >
        <div className="campo">
          <label htmlFor="">DEFINIR PRESUPUESTO</label>

         <input
         className="nuevo-presupuesto"
         placeholder="Añada su presupuesto"         
         type="number" 
         value={presupuesto}
         onChange={ (e)=> setPresupuesto(e.target.value)}/>
        </div>

        <input type="submit" value='AÑADIR PRESUPUESTO'    />

        { mensaje && <Mensaje tipo= "error">{mensaje} </Mensaje>}
      </form>
        
    </div>
    
  )
}

export default NuevoPresupuesto
