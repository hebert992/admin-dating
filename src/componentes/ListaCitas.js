import React from 'react';
import Cita from './Citas'

const ListaCitas = ({citas,eliminarCitas}) => {
    
    return (
        <div className=" card">
            <div className=" card-body">
                <div className=" card-title text-center">
                    <h2>Administra las citas aqui</h2>
                    <div className=" lista-citas">
                        {citas.map(cita =>(
                         <Cita key={cita.id} cita={cita} eliminarCitas={eliminarCitas}/>   
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ListaCitas;