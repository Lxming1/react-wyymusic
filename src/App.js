import React, { memo, useEffect } from 'react';
import XMAppHeader from 'components/app-header';
import XMAppFooter from 'components/app-footer';
import AppWrapper from './router';
import { HashRouter } from 'react-router-dom';
import { AppPlayerBar } from './pages/player/app-player-bar';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeCurrentSong } from './pages/player/store/actionCreater';


export default memo(function App() {

  const { song } = useSelector(state => ({
    song: state.getIn(['songInfo', 'currentSong'])
  }), shallowEqual)
  
  const dispatch = useDispatch()

  useEffect(() => {
    // const load = () => {
    //   const currentSong = window.localStorage.getItem('currentSong')
    //   dispatch(changeCurrentSong(currentSong))
    //   console.log('into')
    // }
    // window.addEventListener('onload', load)
    

    // if (window.localStorage.getItem('currentSong')) {
    //   const currentSong = window.localStorage.getItem('currentSong')
    //   dispatch(changeCurrentSong(currentSong))
    //   console.log(window.localStorage.getItem('currentSong'))
    // }

    // const leave = () => {
    //   console.log(song)
    //   window.localStorage.setItem('currentSong', song)
    // }
    // window.addEventListener('beforeunload', leave)

    // return () => {
    //   window.removeEventListener('beforeunload', leave)
    //   // window.removeEventListener('onload', load)
    // }
  }, [song])
  return (
    <HashRouter>
      <XMAppHeader/>
      <AppWrapper/>
      <XMAppFooter/>
      <AppPlayerBar/>
    </HashRouter>
  );
});
