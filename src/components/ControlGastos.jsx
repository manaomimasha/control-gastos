
const ControlGastos = ({ presupuesto }) => {

        const formatearCantidad = (cantidad) => {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return formatter.format(cantidad)
        }


    return (
        <div className=" contenedor-presupuesto  contenedor sombra dos-columnas">
            <div> <p>grafica aqui</p> </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
            </div>
        </div>
    )
}

export default ControlGastos
