import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ClientTable from './ClientsTable';


export default class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        axios.get('https://backendhotel-backup.herokuapp.com/api/reserva/')
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.students.map((res, i) => {
            return <ClientTable obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Cedula</th>
                        <th>Ciudad</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Num personas</th>
                        <th>Habitaciones</th>
                        <th>Fecha ingreso</th>
                        <th>Fecha salida</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}