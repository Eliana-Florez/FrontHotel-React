import React from 'react'

import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';


export default function HomePage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{span:12}} md={{span:6}} className="mb-5">
                    <h1> Hotel Aroma cafetera</h1>
                    <p>Aca ira el apartado d e inicio del aplicativo web Eliana</p>
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