import { Row, Col, InputGroup, Form } from "react-bootstrap";
import useAutoFocus from '../../hooks/useAutoFocus'

type SearchBarProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
};
const SearchBar = (props: SearchBarProps) => {
    const searchbar = useAutoFocus()
    return (
        <>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <InputGroup className="mt-3 mb-3">
                        <Form.Control
                            ref={searchbar}
                            value={props.value}
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
