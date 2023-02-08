import { Row } from "react-bootstrap";
import Character from "./Character";
import { CharacterModel } from "../../types/Characters";
interface Props {
    characters: Array<CharacterModel>;
}

const Characters = ({ characters }: Props): JSX.Element => {
    function buildCharacter() {
        return characters.map((character) => (
            <Character character={character} key={character.id} />
        ));
    }

    return <Row className="mt-2 mb-2">{buildCharacter()}</Row>;
};

export default Characters;
