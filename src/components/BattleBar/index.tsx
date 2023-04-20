import { Dispatch, SetStateAction, useState } from 'react';
import imgPlaceholder from '../../assets/images/wizard-silhouette.jpg';
import { CalculateDuelPoints } from '../../helpers/calculateDuelPoints';

import Button from '../Button';
import {
  Avatar,
  Container,
  DuelHandleContainer,
  DuelResultText,
  DuelistContainer,
  RemoveDuelist,
} from './style';

type BattlerBarProps = {
  duelists?: ICharacter[];
  setDuelists: Dispatch<SetStateAction<ICharacter[] | undefined>>;
  setDuelHistory: Dispatch<SetStateAction<DuelHistory>>;
};

const BattleBar = ({
  duelists,
  setDuelists,
  setDuelHistory,
}: BattlerBarProps) => {
  const [duelResult, setDuelResult] = useState<string>();

  const handleRemoveDuelist = (duelist: ICharacter) => {
    setDuelists((prev) => prev?.filter((d) => d.id !== duelist.id));
  };

  const handleDuel = (wizard1: ICharacter, wizard2: ICharacter) => {
    const [duelPointsWizard1, duelPointsWizard2] = CalculateDuelPoints(
      wizard1,
      wizard2
    );
    // To test draw condition, uncomment the following line and comment the above lines
    // const [duelPointsWizard1, duelPointsWizard2] = [50, 50];

    if (duelPointsWizard1 > duelPointsWizard2) {
      setDuelResult(`${wizard1.name} won with ${duelPointsWizard1} points`);
      setDuelHistory((prevHistory) => [
        ...prevHistory,
        [
          { name: wizard1.name, isWinner: true, duelPoints: duelPointsWizard1 },
          {
            name: wizard2.name,
            isWinner: false,
            duelPoints: duelPointsWizard2,
          },
        ],
      ]);
    } else if (duelPointsWizard2 > duelPointsWizard1) {
      setDuelResult(`${wizard2.name} won with ${duelPointsWizard2} points`);
      setDuelHistory((prevHistory) => [
        ...prevHistory,
        [
          {
            name: wizard1.name,
            isWinner: false,
            duelPoints: duelPointsWizard1,
          },
          { name: wizard2.name, isWinner: true, duelPoints: duelPointsWizard2 },
        ],
      ]);
    } else {
      setDuelResult('It is a draw 👀');
      setDuelHistory((prevHistory) => [
        ...prevHistory,
        [
          {
            name: wizard1.name,
            isWinner: false,
            duelPoints: duelPointsWizard1,
          },
          {
            name: wizard2.name,
            isWinner: false,
            duelPoints: duelPointsWizard2,
          },
        ],
      ]);
    }
  };

  const cleanDuelInfo = () => {
    setDuelists([]);
    setDuelResult(undefined);
  };

  return (
    <Container>
      {duelists?.map((duelist) => (
        <DuelistContainer key={duelist.id}>
          <RemoveDuelist
            disabled={!!duelResult}
            onClick={() => handleRemoveDuelist(duelist)}
          >
            x
          </RemoveDuelist>
          <Avatar src={duelist.image || imgPlaceholder} alt="image of wizard" />
        </DuelistContainer>
      ))}
      {duelists && duelists.length > 1 && (
        <DuelHandleContainer>
          {duelResult && <DuelResultText>{duelResult}</DuelResultText>}
          <Button
            label={duelResult ? 'New Duel! 🧹' : 'Duel 🪄'}
            onClick={() => {
              duelResult
                ? cleanDuelInfo()
                : handleDuel(duelists[0], duelists[1]);
            }}
          />
        </DuelHandleContainer>
      )}
    </Container>
  );
};

export default BattleBar;
