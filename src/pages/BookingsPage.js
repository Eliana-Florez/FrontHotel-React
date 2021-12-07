import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class BookingsPage extends Component {
    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeNombresCliente = this.onChangeNombresCliente.bind(this);
        this.onChangeApellidosCliente = this.onChangeApellidosCliente.bind(this);
        this.onChangeCedulaCliente = this.onChangeCedulaCliente.bind(this);
        this.onChangeCiudadOrigenCliente = this.onChangeCiudadOrigenCliente.bind(this);
        this.onChangeTelefonoCliente = this.onChangeTelefonoCliente.bind(this);
        this.onChangeEmailCliente = this.onChangeEmailCliente.bind(this);
        this.onChangeNumPersonasCliente = this.onChangeNumPersonasCliente.bind(this);
        this.onChangeInfoHabitacionCliente= this.onChangeInfoHabitacionCliente.bind(this);
        this.onChangeFechaIngresoCliente = this.onChangeFechaIngresoCliente.bind(this);
        this.onChangeFechaSalidaCliente= this.onChangeFechaSalidaCliente.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            nombresClient: '',
            apellidosClient: '',
            cedulaClient: '',
            ciudadOrigenClient: '',
            telefonoClient: '',
            emailClient: '',
            numPersonas: '',
            infoHabitacion: '',
            fechaIngreso: '',
            fechaSalida:''
        }
    }

    onChangeNombresCliente(e) {
        this.setState({ name: e.target.value })
    }

    onChangeApellidosCliente(e) {
        this.setState({ lastName: e.target.value })
    }

    onChangeCedulaCliente(e) {
        this.setState({ id: e.target.value })
    }

    onChangeCiudadOrigenCliente(e) {
        this.setState({ city: e.target.value })
    }

    onChangeTelefonoCliente(e) {
        this.setState({ phone: e.target.value })
    }

    onChangeEmailCliente(e) {
        this.setState({ email: e.target.value })
    }

    onChangeNumPersonasCliente(e) {
        this.setState({ num: e.target.value })
    }

    onChangeInfoHabitacionCliente(e) {
        this.setState({ room: e.target.value })
    }

    onChangeFechaIngresoCliente(e) {
        this.setState({ dateIngreso: e.target.value })
    }

    onChangeFechaSalidaCliente(e) {
        this.setState({ dateSalida: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const clientObject = {
            nombresClient: this.state.name,
            apellidosClient: this.state.lastName,
            cedulaClient: this.state.id,
            ciudadOrigenClient: this.state.city,
            telefonoClient: this.state.phone,
            emailClient: this.state.email,
            numPersonas: this.state.num,
            infoHabitacion: this.state.room,
            fechaIngreso: this.state.dateIngreso,
            fechaSalida: this.state.dateSalida,
        };

        axios.post('https://backendhotel-backup.herokuapp.com/api/reserva/add', clientObject)
            .then(res => console.log(res.data));

        this.setState({
            nombresClient: '',
            apellidosClient: '',
            cedulaClient: '',
            ciudadOrigenClient: '',
            telefonoClient: '',
            emailClient: '',
            numPersonas: '',
            infoHabitacion: '',
            fechaIngreso: '',
            fechaSalida:''
        });
        alert(`La reserva se ha realizado correctamente!`);
    }

    render() {
        return (<div className="form-wrapper" >
            <Form onSubmit={this.onSubmit}>
                <h1>Datos personales</h1><br></br>
                <div class="input-group">
                <Form.Group controlId="nombresClient" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeNombresCliente} />
                </Form.Group>

                <Form.Group controlId="apellidosClient" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeApellidosCliente} />
                </Form.Group>
                </div>
                <div class="input-group">
                <Form.Group controlId="cedulaClient" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Documento de identidad</Form.Label>
                    <Form.Control type="text" value={this.state.id} onChange={this.onChangeCedulaCliente} />
                </Form.Group>

                <Form.Group controlId="ciudadOrigenClient" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Ciudad de origen</Form.Label>
                    <Form.Control type="text" value={this.state.city} onChange={this.onChangeCiudadOrigenCliente} />
                </Form.Group>
                </div>
                <div class="input-group">
                <Form.Group controlId="telefonoClient" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" value={this.state.phone} onChange={this.onChangeTelefonoCliente} />
                </Form.Group>

                <Form.Group controlId="emailClient" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmailCliente} />
                </Form.Group>
                </div>

                <br></br><br></br><h1>Información sobre la reserva</h1><br></br>

                <div class="input-group">
                <Form.Group controlId="numPersonas" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Número de personas</Form.Label>
                    <Form.Control type="text" value={this.state.num} onChange={this.onChangeNumPersonasCliente} />
                </Form.Group>

                <Form.Group controlId="infoHabitacion" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Habitaciones</Form.Label>
                    <Form.Control type="text" value={this.state.room} onChange={this.onChangeInfoHabitacionCliente} />
                </Form.Group>
                </div>
                <div class="input-group">
                <Form.Group controlId="fechaIngreso" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>Fecha de ingreso</Form.Label>
                    <Form.Control type="text" value={this.state.dateIngreso} onChange={this.onChangeFechaIngresoCliente} />
                </Form.Group>

                <Form.Group controlId="fechaSalida" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                    <Form.Label>fechaSalida</Form.Label>
                    <Form.Control type="text" value={this.state.dateSalida} onChange={this.onChangeFechaSalidaCliente} />
                </Form.Group>
                </div><br></br><center>
                <Button variant="danger" size="lg" block="block" type="submit" >
                    Reservar
                </Button></center>
            </Form>
        </div>);
    }
}
