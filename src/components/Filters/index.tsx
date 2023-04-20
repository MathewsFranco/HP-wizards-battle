import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getUniqueAttributes } from '../../helpers/wand';
import Input from '../Input';
import Select from '../Input/Select';
import { Container } from './style';

type FiltersProps = {
  unfilteredData: ICharacter[];
  setListedCharacters: Dispatch<SetStateAction<ICharacter[]>>;
};

const HOUSES = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const Filters = ({ unfilteredData, setListedCharacters }: FiltersProps) => {
  const [filters, setFilters] = useState<IFilters>({});

  const handleFilterChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value, type } = event.target;
    const checked =
      type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : undefined;
    setFilters((prevState) => ({
      ...prevState,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  useEffect(() => {
    if (unfilteredData) {
      let filteredData = [...unfilteredData];
      const {
        name,
        isAlive,
        bornBefore,
        bornAfter,
        house,
        wood,
        core,
        length,
      } = filters;

      if (name)
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        );

      if (isAlive) filteredData = filteredData.filter((item) => item.alive);

      if (bornBefore)
        filteredData = filteredData.filter(
          (item) => item.yearOfBirth && +item.yearOfBirth < bornBefore
        );

      if (bornAfter)
        filteredData = filteredData.filter(
          (item) => item.yearOfBirth && +item.yearOfBirth > bornAfter
        );

      if (house)
        filteredData = filteredData.filter((item) => item.house === house);

      if (wood)
        wood === 'unknown'
          ? (filteredData = filteredData.filter((item) => !item.wand.wood))
          : (filteredData = filteredData.filter(
              (item) => item.wand.wood === wood
            ));

      if (core)
        core === 'unknown'
          ? (filteredData = filteredData.filter((item) => !item.wand.core))
          : (filteredData = filteredData.filter(
              (item) => item.wand.core === core
            ));

      if (length)
        length === 'unknown'
          ? (filteredData = filteredData.filter((item) => !item.wand.length))
          : (filteredData = filteredData.filter(
              (item) => item.wand.length === +length
            ));

      setListedCharacters(filteredData);
    }
  }, [filters, unfilteredData, setListedCharacters]);

  const {
    woods: woodOptions,
    cores: coreOptions,
    lengths: lengthOptions,
  } = getUniqueAttributes(unfilteredData);

  const getOptions = (options: string[] | number[]) => (
    <>
      <option value="">All</option>
      {options.map((option: string | number, i: number) => (
        <option key={i} value={option || 'unknown'}>
          {option || 'unknown'}
        </option>
      ))}
    </>
  );

  return (
    <Container>
      <Input
        placeholder="Search by name"
        name="name"
        onChange={handleFilterChange}
      />
      <Input
        label="Is Alive"
        type="checkbox"
        name="isAlive"
        onChange={handleFilterChange}
      />

      <Input
        label="Born After"
        type="number"
        name="bornAfter"
        onChange={handleFilterChange}
      />

      <Input
        label="Born Before"
        type="number"
        name="bornBefore"
        onChange={handleFilterChange}
      />

      <Select name="house" label="Select House" onChange={handleFilterChange}>
        {getOptions(HOUSES)}
      </Select>
      <Select name="wood" label="Wand wood" onChange={handleFilterChange}>
        {getOptions(woodOptions)}
      </Select>
      <Select name="core" label="Wand core" onChange={handleFilterChange}>
        {getOptions(coreOptions)}
      </Select>
      <Select name="length" label="Wand length" onChange={handleFilterChange}>
        {getOptions(lengthOptions.map(Number))}
      </Select>
    </Container>
  );
};

export default Filters;
