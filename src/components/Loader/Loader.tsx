import { CircularProgress } from '@mui/material';
import { createUseStyles } from 'react-jss';

export const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  {
    name: 'Loader',
  }
);
