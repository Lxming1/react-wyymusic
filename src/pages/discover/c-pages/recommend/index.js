import React, { memo } from 'react';
import Banner from './c-cpns/banner';
import HotRecommend from './c-cpns/main-left/hot-recommend';
import MainRight from './c-cpns/main-right';
import NewDiscs from './c-cpns/main-left/new-discs';
import Toplist from './c-cpns/main-left/toplist';
import { DiscoverWrapper } from './style';


export default memo(function XMRecommend() {
  return (
    <DiscoverWrapper>
      <Banner/>
      <div className="wrap-v2 songMain">
        <div className='songMainLeft'>
          <HotRecommend/>
          <NewDiscs/>
          <Toplist/>
        </div>
        <div className='songMainRight'>
          <MainRight/>
        </div>
      </div>
    </DiscoverWrapper>
  );
});
