import { Spinner, Container, Row, Col } from 'react-bootstrap';

function Loading() {
    return (
        <Container>
            <Row style={{ height: "100vh" }} className="align-items-center">
                <Col lg={12} className="text-center">
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </Col>
            </Row>
        </Container >
    )
}

export default Loading;