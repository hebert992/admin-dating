import React from 'react';

const Citas = ({cita,eliminarCitas}) => {
    return (
        <div className=" media mt-3"> 
            <div className=" media-body">
                <h2 className="mt-0">{cita.mascota}</h2>
                <p className=" card-text"> <span>Nombre Dueno</span>{cita.propietario}</p>
                <p className=" card-text"> <span>Fecha: </span>{cita.fecha}</p>
                <p  className=" card-text"><span>Hora: </span>{cita.propietario}</p>
                <p className=" card-text"> <span>Sintomas</span></p>
                <p className=" card-text">{cita.sintomas}</p>
                <button className=" btn btn-danger btn-block" onClick={()=>eliminarCitas(cita.id)} type="button"> Eliminar &times;</button>
            </div>
        </div>
    );
};

export default Citas;