import { createUseStyles } from 'react-jss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LayoutProvider } from '../contexts';
import { Nav } from '../components';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { ListPage, Home, DetailsPage } from '../screens';
import { Appbar } from '../components/Appbar';

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <LayoutProvider>
            <div className={classes.root}>
              <Nav />
              <div className={classes.content}>
                <Appbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pokemon" element={<ListPage />}>
                    <Route path=":id" element={<DetailsPage />} />
                  </Route>
                </Routes>
              </div>
            </div>
        </LayoutProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      background: '#171E2b',
      minHeight: '100vh',
      minWidth: '100vw',
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    content: {
      flex: '1',
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
    },
  },
  { name: 'App' }
);

export default App;
