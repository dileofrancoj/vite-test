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
                    <Card.Img variant="top" style={{ width: '200px', margin: '0 auto' }} loading="lazy" className="mt-2" src={character.image} />
                    <Card.Body>
                        <CharacterName>{character.name}</CharacterName>
                        <p>Especie: <b>{character.species}</b></p>
                        <Button style={{ fontSize: '10px' }} variant="outline-info">{`Más información`}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Characters;
