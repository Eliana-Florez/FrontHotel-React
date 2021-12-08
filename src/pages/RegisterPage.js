
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class RegisterPage extends Component {
    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeNameUser = this.onChangeNameUser.bind(this);
        this.onChangeEmailUser = this.onChangeEmailUser.bind(this);
        this.onChangePasswordUser = this.onChangePasswordUser.bind(this);
        this.onChangePassword2User = this.onChangePassword2User.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
        }
    }

    onChangeNameUser(e) {
        this.setState({ nameUser: e.target.value })
    }

    onChangeEmailUser(e) {
        this.setState({ emailUser: e.target.value })
    }

    onChangePasswordUser(e) {
        this.setState({ passUser: e.target.value })
    }

    onChangePassword2User(e) {
        this.setState({ pass2User: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.nameUser,
            email: this.state.emailUser,
            password: this.state.passUser,
            password2: this.state.pass2User,
        };

        axios.post('https://backendhotel-backup.herokuapp.com/api/users/register', userObject)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
            password: '',
            password2: '',
        });
        alert(`Se ha regitrado correctamente!`);
    }

    render() {
        return (<div className="form-register" >
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Registrarse</h1>
            <Row className="shadow-sm rounded-lg">
                <Col lg={6} md={6} sm={12} className="p-5 m-auto ">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="nombresUser" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={this.state.nameUser} onChange={this.onChangeNameUser} />
                        </Form.Group>
                        <Form.Group controlId="emailUser" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.emailUser} onChange={this.onChangeEmailUser} />
                        </Form.Group>
                        <Form.Group controlId="contraseñaUser"  >
                            <Form.Label>Contraseña (mínimo 8 carácteres )</Form.Label>
                            <Form.Control type="password" value={this.state.passUser} onChange={this.onChangePasswordUser} />
                        </Form.Group>
                        <Form.Group controlId="contraseñaUser2" class="col-xs-6 col-sm-6 col-md-6 px-4 py-2" >
                            <Form.Label>Repita la contraseña</Form.Label>
                            <Form.Control type="password" value={this.state.pass2User} onChange={this.onChangePassword2User} />
                        </Form.Group>
                        <Button variant="danger" size="lg" block="block" type="submit" >
                            Registrarse
                        </Button>
                    </Form>
                </Col>
                <Col className="mt-5">
                    <Row className="mt-5"></Row>
                    <img className="img-fluid" src="/img/Aroma.svg" alt="Logo aroma" />
                </Col>
            </Row>
        </div>);
    }
}


