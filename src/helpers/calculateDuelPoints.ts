interface HousePoints {
  [house: string]: {
    [opponent: string]: number;
  };
}

const calculateHousePoints = (wizard1: ICharacter, wizard2: ICharacter) => {
  const rivalryBuff = 10;

  const houseConditions: HousePoints = {
    Gryffindor: { Slytherin: rivalryBuff },
    Slytherin: { Hufflepuff: rivalryBuff },
    Hufflepuff: { Ravenclaw: rivalryBuff },
    Ravenclaw: { Gryffindor: rivalryBuff },
  };

  const housePoints: number[] = [0, 0];

  if (wizard1.house && wizard2.house) {
    housePoints[0] = houseConditions[wizard1.house][wizard2.house] || 0;
    housePoints[1] = houseConditions[wizard2.house][wizard1.house] || 0;
  }

  return housePoints;
};

const calculateAge = (dateOfBirth: string | null | number) => {
  let birthDate: Date;

  if (typeof dateOfBirth === 'string') {
    const [day, month, year] = dateOfBirth.split('-').map(Number);
    birthDate = new Date(year, month - 1, day);
  } else if (typeof dateOfBirth === 'number') {
    birthDate = new Date(dateOfBirth, 0, 1);
  } else {
    return 0;
  }

  const ageDate = new Date(Date.now() - birthDate.getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const CalculateDuelPoints = (
  wizard1: ICharacter,
  wizard2: ICharacter
) => {
  const houseBonus = calculateHousePoints(wizard1, wizard2);
  const age1 = calculateAge(wizard1.dateOfBirth || wizard1.yearOfBirth);
  const age2 = calculateAge(wizard2.dateOfBirth || wizard2.yearOfBirth);
  const wandPower1 = wizard1.wand.power;
  const wandPower2 = wizard2.wand.power;

  return [
    age1 * 0.5 + wandPower1 * 0.3 + houseBonus[0],
    age2 * 0.5 + wandPower2 * 0.3 + houseBonus[1],
  ];
};
