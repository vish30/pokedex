import { Typography } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link, useLocation } from 'react-router-dom';

import { Pokemon } from '../../hooks/useGetPokemons';
import { PokemonImage } from '../PokemonImage';

const ListItem: React.FC<Pokemon> = (props) => {
  const { id, name, image, number, types } = props;
  const classes = useStyles();
  const location = useLocation();
  return (
    <div key={id} className={classes.itemMain}>
      <Link to={`/pokemon/${id}${location.search}`}>
        <div className={classes.itemContainer}>
          <PokemonImage src={image} alt={`${name} image`} />
          <div className={classes.itemData}>
            <div>Number: {number}</div>
            <Typography variant="h4">{name}</Typography>
            <p>Types: {types.join(', ')}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    itemMain: {
      width: '280px',
      height: '360px',
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: '#7C89A3',
      marginBottom: '16px',
      '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer',
      },
      transition: '0.5s ease',
      margin: '24px',
    },
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '16px',
    },
    itemData: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#1b2332 !important',
    },
    name: {
      fontSize: '32px',
    },
  },
  {
    name: 'ListItem',
  }
);

export default ListItem;
