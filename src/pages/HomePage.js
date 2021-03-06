import React from 'react'

import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';


export default function HomePage() {
    return (
        <Container>
            <Row className="m-5 p-5 "></Row>
            <Row className="mt-5">
                <Col xs={{span:12}} md={{span:6}} className="mb-5">
                    <h1> Hotel Aroma cafetera</h1>
                    <p>En Circasia Quindí­o, en el corazón del eje cafetero, se levanta su Hotel "Aroma Cafetera", queremos brindarle a nuestros huéspedes la mejor experiencia de la cultura cafetera de nuestra región, comida tí­pica, 10 cómodas habitaciones, arte y arquitectura propias de una finca cafetera, entre otros.</p>
                    <diV>
                        <Link to={routes.login}>Ingresar</Link> para realizar las reservas en el Hotel

                    </diV>
                </Col>
                <Col>
                    <img className="img-fluid" src="/img/Aroma.svg" alt="Logo aroma"/>
                </Col>
            </Row>
        </Container>
    )
}
/*<Button as={Link} to={routes.login}> Inicia secion </Button> para realizar las reservas en el Hotel*/