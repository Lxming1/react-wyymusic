import XMDiscover from "pages/discover"
import XMRecommend from "pages/discover/c-pages/recommend"
import XMToplist from "pages/discover/c-pages/toplist"
import XMPlaylist from "pages/discover/c-pages/playlist"
import XMDjradio from "pages/discover/c-pages/djradio"
import XMArtist from "pages/discover/c-pages/artist"
import XMAlbum from "pages/discover/c-pages/album"
import XMPlaylistItem from "pages/discover/c-pages/playlist-detail"
import XMSong from "pages/player"

import XMMy from "pages/my"
import XMFriend from "pages/friend"
import XMDownload from "pages/download"
import XMCreatorcenter from "pages/creatorcenter"
import { useRoutes } from "react-router-dom"
import None from "../pages/404"


const routes = [
  {path: '/', element: <XMDiscover/>, children: [
    {path: '/', element: <XMRecommend/>},
    {path: '/discover', element: <XMRecommend/>},
    {path: '/discover/toplist', element: <XMToplist/>},
    {path: '/discover/playlist', element: <XMPlaylist/>},
    {path: '/discover/djradio', element: <XMDjradio/>},
    {path: '/discover/artist', element: <XMArtist/>},
    {path: '/discover/album', element: <XMAlbum/>}
  ]},
  {path: '/my', element: <XMMy/>},
  {path: '/friend', element: <XMFriend/>},
  {path: '/download', element: <XMDownload/>},
  {path: '/creatorcenter', element: <XMCreatorcenter/>},
  {path: '/playlist', element: <XMPlaylistItem/>},
  {path: '/song', element: <XMSong/>},
  {path: '/404', element: <None/>},
  {path: '*', element: <None/>}
]

const App = () => useRoutes(routes)

export default App