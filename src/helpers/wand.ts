type wandAttPowerList = {
  woods: {
    [key: string]: number;
  };
  cores: {
    [key: string]: number;
  };
  lengths: {
    [key: string]: number;
  };
};

const getRandomPower = () => Math.floor(Math.random() * 50) + 1;

// Returns an object with three arrays of unique woods, cores, and lengths
export const getUniqueAttributes = (data: ICharacter[]) => {
  const woods: string[] = [];
  const cores: string[] = [];
  const lengths: number[] = [];

  // Loop through the array of characters and check if each wood, core, and length already exists in their respective arrays
  data?.forEach((character) => {
    const { wood, core, length } = character.wand;
    if (!woods.includes(wood)) woods.push(wood);
    if (!cores.includes(core)) cores.push(core);
    if (!lengths.includes(length)) lengths.push(length);
  });

  return { woods, cores, lengths };
};

// Assigns a random power to each unique wood, core, and length
const assignAttributesPower = (data: ICharacter[]) => {
  const { woods, cores, lengths } = getUniqueAttributes(data);

  const assignPower = (keys: string[]) => {
    return keys.reduce((obj: { [key: string]: number }, key: string) => {
      obj[key] = getRandomPower();
      return obj;
    }, {});
  };

  const woodPowers = assignPower(woods);
  const corePowers = assignPower(cores);
  const lengthPowers = assignPower(lengths.map(String));

  // Return an object with three objects of assigned powers for each unique wood, core, and length
  return { woods: woodPowers, cores: corePowers, lengths: lengthPowers };
};

// Function that calculates the wand power based on the assigned powers of its wood, core, and length
const calculateWandPower = (
  wandAttPower: wandAttPowerList,
  wood: string,
  core: string,
  length: number
): number => {
  // If the wood, core, or length is not provided, return a random power
  if (!wood || !core || !length) return getRandomPower();

  return (
    // Calculate the wand power as the average of its assigned powers of its wood, core, and length
    (wandAttPower.woods[wood] +
      wandAttPower.cores[core] +
      wandAttPower.lengths[length]) /
    3
  );
};

// Function that assigns the wand power to each character in the array based on their wand's wood, core, and length
export const registerWandPower = (data: ICharacter[]) => {
  const wandAttPowerList = assignAttributesPower(data);

  // Map through the array of characters and assign the wand power based on their wand's wood, core, and length
  return data.map((item: ICharacter) => ({
    ...item,
    wand: {
      ...item.wand,
      power: calculateWandPower(
        wandAttPowerList,
        item.wand.wood,
        item.wand.core,
        item.wand.length
      ),
    },
  }));
};
