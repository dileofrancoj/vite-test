import { Col, Card, Button } from "react-bootstrap";
import { CharacterModel } from '../../types/Characters'
import { CharacterName } from './styled'
interface Props {
    character: CharacterModel;
}


const Characters = ({ character }: Props): JSX.Element => {

    return (
        <>
            <Col xs={12} md={2} className="mb-1 mt-1">
                <Card className="text-center" style={{ width: '13rem' }}>
                    <Card.Img variant="top" style={{ width: '200px', margin: '0 auto' }} className="mt-2" src={character.image} />
                    <Card.Body>
                        <CharacterName>{character.name}</CharacterName>
                        <Button variant="primary">Link</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Characters;
