import useAuth from "../auth/useAuth"
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const userCredentials={};

export default function LoginPage() {
    const {login} = useAuth();
    return (
        <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Iniciar Sesion</h1>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Nombre de Usuario" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <br/>

                        <Button variant="success btn-block" type="submit" onClick={()=>login(userCredentials)} >
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <img className="img-fluid" src="/img/Aroma.svg" alt="Logo aroma"/>
                </Col>
            </Row>
            {/* <button onClick={()=>login(userCredentials)} >login</button> */}
        </Container>
        // <div>
        //     <h1>Login page</h1>
        //     <button onClick={()=>login(userCredentials)} >login</button>
        // </div>
    )
}
