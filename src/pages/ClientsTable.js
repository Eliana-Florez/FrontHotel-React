import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ClientsTable extends Component {

    constructor(props) {
        super(props);
        this.deleteClient= this.deleteClient.bind(this);
    }

    deleteClient() {
        axios.delete('https://backendhotel-backup.herokuapp.com/api/reserva/delete/' + this.props.obj._id)
            .then((res) => {
                console.log('Client successfully deleted!');
                alert('Client successfully deleted!');
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.nombresClient}</td>
                <td>{this.props.obj.apellidosClient}</td>
                <td>{this.props.obj.cedulaClient}</td>
                <td>{this.props.obj.ciudadOrigenClient}</td>
                <td>{this.props.obj.telefonoClient}</td>
                <td>{this.props.obj.emailClient}</td>
                <td>{this.props.obj.numPersonas}</td>
                <td>{this.props.obj.infoHabitacion}</td>
                <td>{this.props.obj.fechaIngreso}</td>
                <td>{this.props.obj.fechaSalida}</td>
                <td>
                    <Link className="edit-link" to={"/editBooking/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteClient} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}