import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTable from './UserTable';


export default class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        axios.get('https://backendhotel-backup.herokuapp.com/api/users/')
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
            return <UserTable obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Usuarios registrados</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Email</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}