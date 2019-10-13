import './bootstrap.min.css';
import React, { Component } from 'react';
import Header from './componentes/Header'
import NuevaCita from './componentes/NuevaCita'
import ListaCitas from './componentes/ListaCitas'


class App extends Component {

  state={
    citas:[],
  }

  crearNuevaCita = (datos)=>{
    console.log(datos);
    const citas = [...this.state.citas,datos]

    this.setState({
      citas,
    });
  }

  eliminarCitas= id =>{
    console.log(id);
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita =>cita.id!==id);

    this.setState({
      citas
    })
  }

  componentDidMount(){
    console.log("cuando la aplicacion carga");
    const citasLS = localStorage.getItem('citas')
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS),
      })
    }
  }

  componentDidUpdate(){
    console.log("Cuando se actualiza el componente"); 
    localStorage.setItem('citas',JSON.stringify(this.state.citas))
  }

  render() {
    return (
      <div className=" container">
        <Header titulo="Adminsitrador de citas"/>
        <div className=" row">
          <div className=" col-md-10 mx-auto">
            <NuevaCita crearNuevaCita = {this.crearNuevaCita}/>
          </div>
        </div>
        <div className=" row mt-4">
          <div className=" col-md-10 mx-auto">
            <ListaCitas citas = {this.state.citas} eliminarCitas={this.eliminarCitas}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

