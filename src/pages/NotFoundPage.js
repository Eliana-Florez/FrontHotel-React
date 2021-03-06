import React from 'react'

import { Link } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import routes from '../helpers/routes';
export default function NotFoundPage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{span: 6, offset:3}} className="text-center">
                    <img style={{width:'100%'}}  src="/img/404-not-found.svg" alt="Error-404"/>
                    <h2>La pagina que buscas no ha sido encontrada</h2>
                    <p>Vuelve al <Link to={routes.home}> inicio</Link></p>
                </Col>
            </Row>
        </Container>
    )
}
