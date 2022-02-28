import React, { memo } from 'react';
import XMAppHeader from 'components/app-header';
import XMAppFooter from 'components/app-footer';
import AppWrapper from './router';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <HashRouter>
      <XMAppHeader/>
      <AppWrapper/>
      <XMAppFooter/>
    </HashRouter>
  );
});
