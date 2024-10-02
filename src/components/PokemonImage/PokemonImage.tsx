import React from 'react';
import { createUseStyles } from 'react-jss';

type PokemonImageProps = {
  src?: string;
  alt: string;
};

export const PokemonImage: React.FC<PokemonImageProps> = (props) => {
  const { src, alt } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={src} alt={alt} />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '240px',
      height: '240px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        height: '100%',
        maxWidth: '100%',
        borderRadius: '15px',
      },
    },
  },
  {
    name: 'PokemonImage',
  }
);
