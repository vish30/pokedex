import { createUseStyles } from 'react-jss';
import { useGetPokemons, useSearch } from '../../hooks';
import { Loader } from '../Loader';
import ListItem from './ListItem';

export const PokemonList: React.FC = () => {
  const classes = useStyles();
  const {searchText} = useSearch();
  const { pokemons, loading } = useGetPokemons(searchText);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      {pokemons.map((pkmn) => (
        <ListItem key={pkmn.number} {...pkmn} />
      ))}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: 'calc(100vh - 64px)',
      padding: '24px',
      boxSizing: 'border-box',
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      overflow: 'scroll',
    },
  },
  { name: 'PokemonList' }
);
