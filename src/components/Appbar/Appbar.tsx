import * as React from 'react';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { createUseStyles } from 'react-jss';
import { useSearch } from '../../hooks';

export const Appbar: React.FC = () => {
  const { search, searchText } = useSearch();
  const classes = useStyles();

  const onChange = (event: any) => {
    search(event.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Pokédex
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchWrapper}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Pokémon"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChange}
              className={classes.inputBase}
              defaultValue={searchText}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      backgroundColor: '#131924 !important',
    },
    search: {
      position: 'relative',
      borderRadius: '4px',
      backgroundColor: alpha('#ffffff', 0.15),
      '&:hover': {
        backgroundColor: alpha('#ffffff', 0.25),
      },
      marginLeft: 0,
      width: 'auto',
    },
    searchWrapper: {
      padding: '0px 16px',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBase: {
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: '8px 8px 8px 0px',
        paddingLeft: 'calc(1em + 32px)',
        transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        width: '15ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  },
  {
    name: 'Appbar',
  }
);
