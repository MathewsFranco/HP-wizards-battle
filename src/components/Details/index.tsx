import { Dispatch, SetStateAction } from 'react';
import imgPlaceholder from '../../assets/images/wizard-silhouette.jpg';
import Button from '../Button';
import { Avatar, CharInfo, Container, Info } from './style';

type DetailsProps = {
  character?: ICharacter;
  duelists?: ICharacter[];
  setDuelists: Dispatch<SetStateAction<ICharacter[] | undefined>>;
};

const Details = ({ character, duelists, setDuelists }: DetailsProps) => {
  if (!character) return null;
  return (
    <Container house={character.house}>
      <Avatar src={character.image || imgPlaceholder} alt={character.name} />
      <CharInfo>
        <div>
          <Info>Name: {character.name}</Info>
          <Info>Actor: {character.actor}</Info>
          <Info>{character.house}</Info>
          <Info>Alive: {character.alive ? 'Yes' : 'No'}</Info>
          <Info>{character.wizard ? 'Wizard' : 'Muggle'}</Info>
        </div>
        {/* Check if the character is a wizard */}
        {character.wizard ? (
          // check if already have two chosen wizards
          duelists && duelists.length > 1 ? (
            <Info>You already have two duelists picked</Info>
          ) : (
            <Button
              // avoid picking the same wizard twice
              disabled={duelists?.includes(character)}
              label="Select as duelist"
              onClick={() =>
                setDuelists((prev) =>
                  prev ? [...prev, character] : [character]
                )
              }
            />
          )
        ) : (
          <Info>Muggles can not duel!</Info>
        )}
      </CharInfo>
    </Container>
  );
};

export default Details;
