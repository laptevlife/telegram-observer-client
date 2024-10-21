import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterComponent from './Router/RouterComponent';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import BottomMenu from './components/BottomMenu';
import { useActions, useAppSelector } from './hooks/redux';
import { userSlice } from './features/userSlice';
import { mainApi } from './api';
const tg = window.Telegram.WebApp
const tgUser = window.Telegram.WebAppUser

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App = () => {
  const { setUser, setInitDataUnsafe, setTg, setTgUser } = useActions(userSlice.actions);


  useEffect(() => {
    setTg(tg)
    setTgUser(tgUser)
    // setUser(tg?.initDataUnsafe?.user)
    setInitDataUnsafe(tg?.initDataUnsafe)
  }, [setTgUser, setUser, setInitDataUnsafe, setTg])

  // const { data: user } = mainApi.useGetUserQuery(1766287065); //ml
  // const { data: user } = mainApi.useGetUserQuery(1302543735); //rise
  const { data: user } = mainApi.useGetUserQuery(tgUser?.id || 785142454); //face
  useEffect(() => {
    setUser(user)
    console.log('user!', user);

  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <RouterComponent />
          <BottomMenu />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;


