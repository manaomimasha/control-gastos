import Gasto from './Gasto'

const ListadoGastos = ({ gastos }) => {
    return (
        <div className='contenedor listado-gastos' >

            <h2 > {gastos.length ? "Gastos: " : "No hay gastos aun"}</h2>

            {
                gastos.map(gasto =>
                    <Gasto>
                        key= {gasto.id}
                        gasto={gasto}
                    </Gasto>)
            }
        </div>


    )
}

export default ListadoGastos
