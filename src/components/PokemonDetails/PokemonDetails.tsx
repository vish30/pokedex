import React from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import { useGetPokemon, useGetPokemons, useSearch } from '../../hooks';
import { Loader } from '../Loader';
import { LabelValue } from '../LabelValue';
import { getPokemonDetails } from './detailsHelper';
import { PokemonImage } from '../PokemonImage';

type PokemonParams = {
  id: string;
};

const PokemonDetails: React.FC = () => {
  const classes = useStyles();
  const {searchText} = useSearch();
  const { id } = useParams<PokemonParams>();
  const { data, loading } = useGetPokemon(id || '');
  const { pokemons } = useGetPokemons(searchText);
  const navigate = useNavigate();
  const location = useLocation();

  const pokemonMeta = pokemons.find(pokemon => pokemon.id === id);
  console.log("pokemonMeta: ", pokemonMeta);

  const pokemonDetails = React.useMemo(() => {
    if (!data?.pokemon) {
      return null;
    }

    const details = getPokemonDetails(data.pokemon).map((detail, index) => (
      <Grid item xs={12} sm={6} md={6} key={`${index}-${detail.label}`}>
        <LabelValue {...detail} />
      </Grid>
    ));

    return details;
  }, [data]);

  const handleClose = () => {
    navigate(`/pokemon${location.search}`);
  };

  return (
    <Dialog open onClose={handleClose} fullWidth maxWidth="md">
      <Box className={classes.root}>
        <DialogTitle>
          {pokemonMeta?.name ?? data?.name}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={classes.close}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className={classes.contentRoot}>
            <PokemonImage src={pokemonMeta?.image ?? data?.image} alt={`${pokemonMeta?.name} image`} />
            <div className={classes.contentText}>
              {
                loading ? 
                <Loader/> : 
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  {pokemonDetails}
                </Grid>
              }
            </div>
          </div>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      backgroundColor: '#131924',
    },
    close: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: '#9e9e9e',
    },

    contentRoot: {
      display: 'flex',
    },
    contentText: {
      marginLeft: '32px',
      flex: '1',
    },
  },
  {
    name: 'PokemonDetailsModal',
  }
);

export default PokemonDetails;
