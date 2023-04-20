import { useState } from 'react';
import { useQuery } from 'react-query';
import BattleBar from './components/BattleBar';
import Details from './components/Details';
import DuelHistory from './components/DuelHistory';
import Filters from './components/Filters';
import List from './components/List';
import { registerWandPower } from './helpers/wand';

/**
 * Hello friend!
 *
 * Check out the README.md file before getting started
 */

function App() {
  const [duelists, setDuelists] = useState<ICharacter[]>();
  const [unfilteredData, setUnfilteredData] = useState<ICharacter[]>([]);
  const [listedCharacters, setListedCharacters] = useState<ICharacter[]>([]);
  // Selected to show details
  const [selectedCharacter, setSelectedCharacter] = useState<
    ICharacter | undefined
  >();
  const [duelHistory, setDuelHistory] = useState<DuelHistory>([]);
  const [apiErr, setApiErr] = useState<boolean>(false);

  async function getCharacters() {
    try {
      const response = await fetch(
        'https://hp-api.onrender.com/api/characters'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`🚀 ~ error:`, error);
      setApiErr(true);
    }
  }

  const { isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
    onSuccess: (data) => {
      const poweredData = registerWandPower(data);
      setUnfilteredData(poweredData);
      setListedCharacters(poweredData);
    },
  });

  return (
    <>
      <BattleBar
        duelists={duelists}
        setDuelists={setDuelists}
        setDuelHistory={setDuelHistory}
      />
      <Filters
        unfilteredData={unfilteredData}
        setListedCharacters={setListedCharacters}
      />
      {isLoading ? (
        <h1>Looking around Hogwarts...</h1>
      ) : apiErr ? (
        <h1>Looks like you API failed on you...</h1>
      ) : (
        <List
          characters={listedCharacters}
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}
      <Details
        character={selectedCharacter}
        duelists={duelists}
        setDuelists={setDuelists}
      />
      <DuelHistory history={duelHistory} />
    </>
  );
}

export default App;
