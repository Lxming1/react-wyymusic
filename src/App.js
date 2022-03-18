import React, { memo, useEffect, Suspense } from 'react';
import XMAppHeader from 'components/app-header';
import XMAppFooter from 'components/app-footer';
import AppWrapper from './router';
import { HashRouter } from 'react-router-dom';
import { AppPlayerBar } from './pages/player/app-player-bar';
import { useDispatch } from 'react-redux';
import { changeCurrentSong } from './pages/player/store/actionCreater';

export default memo(function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // if (window.localStorage.getItem('currentSong')) {
    //   const currentSong = JSON.parse(window.localStorage.getItem('currentSong'))
    //   dispatch(changeCurrentSong(currentSong))
    // }
  }, [])
  return (
    <HashRouter>
      <XMAppHeader/>
      <Suspense fallback={<div>page loading</div>}>
        <AppWrapper/>
      </Suspense>
      <XMAppFooter/>
      <AppPlayerBar/>
    </HashRouter>
  );
});
