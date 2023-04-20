import { Dispatch, SetStateAction } from 'react';
import WizardCard from './WizardCard';
import { Container } from './style';

type ListProps = {
  characters: ICharacter[];
  selectedCharacter?: ICharacter;
  setSelectedCharacter: Dispatch<SetStateAction<ICharacter | undefined>>;
};

const List = ({
  characters,
  selectedCharacter,
  setSelectedCharacter,
}: ListProps) => {
  return (
    <Container>
      {characters.length ? (
        characters.map((char: ICharacter) => (
          <WizardCard
            key={char.id}
            isActive={selectedCharacter === char}
            wizardName={char.name}
            wizardAvatar={char.image}
            onClick={() => setSelectedCharacter(char)}
          />
        ))
      ) : (
        <p>There is no such mage!</p>
      )}
    </Container>
  );
};

export default List;
