import { PokemonData } from '../../hooks';

export const getPokemonDetails = (
  pokemon: PokemonData
): Array<{ label: string; value: string }> => {
  const {
    classification,
    types,
    resistant,
    number,
    weaknesses,
    fleeRate,
    maxCP,
    maxHP,
    weight,
    height,
  } = pokemon;

  const pokemonData = [
    {
      label: 'Number',
      value: number,
    },
    {
      label: 'Classification',
      value: classification,
    },
    {
      label: 'Types',
      value: types.join(', '),
    },

    {
      label: 'Resistant towards',
      value: resistant.join(', '),
    },
    {
      label: 'Weaknesses',
      value: weaknesses.join(', '),
    },
    {
      label: 'Flee rate',
      value: fleeRate,
    },
    {
      label: 'Weight',
      value: `${weight.minimum} - ${weight.maximum}`,
    },
    {
      label: 'Height',
      value: `${height.minimum} - ${height.maximum}`,
    },
    {
      label: 'Maximum CP',
      value: maxCP,
    },
    {
      label: 'Maximum HP',
      value: maxHP,
    },
  ];

  return pokemonData;
};
