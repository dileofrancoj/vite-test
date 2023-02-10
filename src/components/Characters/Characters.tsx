import * as React from 'react';
import { Row } from "react-bootstrap";

import Character from "./Character";
import CharacterModal from './CharacterModal';
import { CharacterModel } from "../../types/Characters";

interface Props {
    characters: Array<CharacterModel>;
}

const Characters = ({ characters }: Props): JSX.Element => {
    const [selectedCharacterId, setSelectedCharacterId] = React.useState<number | null>(null)
    const [selectedCharacter, setSelectedCharacter] = React.useState<CharacterModel | undefined>(undefined)
    const onCloseModal = () => setSelectedCharacterId(null)

    const onSelectCharacter = (characterId: number) => {
        const character = characters.find((character) => character.id === characterId)
        setSelectedCharacterId(characterId)
        setSelectedCharacter(character)
    }

    function buildCharacter() {
        return characters?.map((character) => (
            <Character onSelectCharacter={onSelectCharacter} character={character} key={character.id} />
        ));
    }

    return (
        <>
            <Row className="mt-2 mb-2">{buildCharacter()}</Row>
            {selectedCharacterId && <CharacterModal character={selectedCharacter} onCloseModal={onCloseModal} />}
        </>
    )
};

export default Characters;
