import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  number: string;
  types: string[];
};

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      image
      types
    }
  }
`;

export const useGetPokemons = (search: string) => {
  // Due to useQuery caching, this API will only be fetched once
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: Pokemon[] = useMemo(() => {
    const searchRegex = new RegExp(search, 'i');
    if (data?.pokemons) {
      return data.pokemons.filter((pokemon: Pokemon) =>
        pokemon.name.match(searchRegex)
      );
    }
    return [];
  }, [data, search]);

  return {
    pokemons,
    ...queryRes,
  };
};
