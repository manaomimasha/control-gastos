import { useState } from "react"
import Mensaje  from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

const [mensaje, setMensaje] = useState('')


const handleInputPresupuesto = (e) => {
  e.preventDefault()

  if( !Number(presupuesto) || Number(presupuesto) < 0 ) {
    setMensaje( 'No es un presupuesto Válido')
  }
  else{
    console.log('todobn ')
  }
}

  return (

    <div className="contenedor contenedor-presupuesto sombra">
      <form className="formulario"  onSubmit={ handleInputPresupuesto}  >
        <div className="campo">
          <label htmlFor="">DEFINIR PRESUPUESTO</label>

         <input
         className="nuevo-presupuesto"
         placeholder="Añada su presupuesto"         
         type="text" 
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
