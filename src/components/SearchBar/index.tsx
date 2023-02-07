import { Row, Col, InputGroup, Form } from "react-bootstrap";

type SearchBarProps = {
    onChange: () => void;
};
const SearchBar = (props: SearchBarProps) => {
    return (
        <>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <InputGroup className="mt-3 mb-3">
                        <Form.Control
                            onChange={props.onChange}
                            placeholder="Personaje..."
                            aria-label="personaje"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </>
    );
};

export default SearchBar;
