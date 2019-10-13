import React, { Component } from 'react';
import uuid from 'uuid'

const stateInicial ={
    cita:{
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    },
    error: false,
   

}

class NuevaCita extends Component {

    state = {
        cita:{
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'',
        },
        error: false,
       
    }

    handleChance =(e)=>{
        this.setState({
             
            cita:{...this.state.cita
                ,[e.target.name] : e.target.value}
            
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        
        //validar que todo los datos esten llenos 

        const {mascota,propietario,fecha,hora,sintomas} = this.state.cita;
 
        if(mascota==='' || propietario ==='' || fecha==='' || hora==='' || sintomas==='')
        {
            this.setState({
                error:true,
            })
            return;
        }
        this.setState({
            ...stateInicial
                });
                
        const cita = {...this.state.cita};
        cita.id=uuid();
        this.props.crearNuevaCita(cita);
        
    }
    
    render() {
        const {error} = this.state;
        return (
            <div>
                <div className=" card mt-5 py-5">
                    <div className=" card-body">
                        <h2 className=" card-title text-center mb-5">
                             LLena el formulario para crear una nueva cita
                        </h2>
                        {error? <div className=" alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                        <form onSubmit={this.handleSubmit}>
                            <div className=" form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                                <div className=" col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className=" form-control"
                                placeholder="Nombre mascota"
                                name="mascota"
                                onChange={this.handleChance}
                                value={this.state.cita.mascota}
                                />
                                </div>
                            </div>
                            <div className=" form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre del dueno</label>
                                <div className=" col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className=" form-control"
                                placeholder="Nombre dueno mascota"
                                name="propietario"
                                onChange={this.handleChance}
                                value={this.state.cita.propietario}
                                />
                                </div>
                            </div>
                            <div className=" form-group row">
                                <label className="col-sm-2 col-lg-2 col-form-label">Fecha</label>
                                <div className=" col-sm-4 col-lg-4">
                                <input
                                type="date"
                                className=" form-control"
                                placeholder="Nombre mascota"
                                name="fecha"
                                onChange={this.handleChance}
                                value={this.state.cita.fecha}
                                />
                                </div>
                                <label className="col-sm-2 col-lg-2 col-form-label">Hora</label>
                                <div className=" col-sm-4 col-lg-4">
                                <input
                                type="time"
                                className=" form-control"
                                placeholder="Nombre mascota"
                                name="hora"
                                onChange={this.handleChance}
                                value={this.state.cita.hora}
                                />
                                </div>
                            </div>
                            <div className=" form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                                <div className=" col-sm-8 col-lg-10">
                                <textarea
                                className=" form-control"
                                placeholder="Describe los sintomas"
                                name="sintomas"
                                onChange={this.handleChance}
                                value={this.state.cita.sintomas}
                                ></textarea>
                                </div>
                            </div>
                            <input type="submit" className =" py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>
                        </form>
                    </div>
                </div>
            </div>
        ) ;
    }
}

export default NuevaCita;