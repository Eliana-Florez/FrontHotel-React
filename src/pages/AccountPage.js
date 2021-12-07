
import { Container,Row,Col, Card } from "react-bootstrap";
import useAuth from "../auth/useAuth";


export default function AccountPage() {
    const {user} = useAuth();
    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center" >
                    <img src="/img/male_avatar.svg" alt="Perfil" style={{width: '200px', height:'200px', borderRadius:'50%', objectFit:'cover'}} />
                </Col>
                <Col>
                    <Card>
                        <p><b>Nombre: </b> {user.name} </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
