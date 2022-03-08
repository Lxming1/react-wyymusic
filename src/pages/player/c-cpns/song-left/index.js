import React, { Fragment, memo, useMemo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { MainLeft } from './style'
import { getImgSize } from 'utils/format-utils'
import VariousBtn from 'components/various-btn'

const SongLeft = memo(() => {
  const { songPageMes } = useSelector(state => ({
    songPageMes: state.getIn(['songInfo', 'songPageMes'])
  }), shallowEqual)
  // const [lyric, setLyric] = useState()


  const headerBtnMes = useMemo(() => ({
    song: songPageMes.id,
    subscribedCount: '收藏',
    shareCount: '分享',
    commentCount: songPageMes.commentCount
  }), [songPageMes])
  console.log(songPageMes)

  const songPic = songPageMes.al && getImgSize(songPageMes.al.picUrl, 130)
  const songAlbum = songPageMes.al && songPageMes.al.name
  const haveTns = ![undefined, ''].includes(songPageMes.tns)
  const haveAlia = songPageMes.alia && songPageMes.alia.length !== 0
  const showSmallIntro = haveAlia || haveTns
  const SmallIntro = !haveTns ? songPageMes.alia : songPageMes.tns

  const lyric = (
    songPageMes.lyric &&
    songPageMes.lyric.split('\n').map((item, index, arr) => {
      const mes = 
        item === '' ? 
        (<Fragment key={index}><br/></Fragment>) : 
        (<Fragment key={index}>{item.split(']')[1]}<br/></Fragment>)
      return index !== arr.length-1 && mes
    }, )
  )
  const [showOpenTag, setShowOpenTag] = useState(true)

  const openTag = (classname, title) => {
    const changeCtro = () => {
      setShowOpenTag(!showOpenTag)
    }
    return (
      <div  
        onClick={e => changeCtro()}
        className={`${classname} contro`}>
        {title}
        <i className="sprite_icon2"></i>
      </div>
    )
  }
  
  return (
    <MainLeft>
      <div className='songIntro'>
        <div className='pic'>
          <img src={songPic} alt="" />
          <span className="image_cover"></span>
        </div>
        <div className='intro'>
          <div className="title">
            <i className='sprite_icon2 titleIcon'></i>
            <span className="itemName">
              {songPageMes.name}
              {songPageMes.mv !== 0 && <i className='sprite_icon2 mvIcon'></i>}
              {showSmallIntro && <span className='tns'>{SmallIntro}</span>}
            </span>
          </div>
          
          <div className='author'>
            <span className='smallTitle'>歌手：</span>
            { songPageMes.ar &&
              songPageMes.ar.map((item, index, arr) => (
                <span key={index}>
                  <a href="" className='introColor'>{item.name}</a>
                  { index < arr.length-1 && <span style={{margin: '0 3.5px'}}>/</span>}
                </span>
              ))
            }
          </div>
          <div className="album">
            <span className="smallTitle">所属专辑：</span>
            <a href=""  className='introColor'>{songAlbum}</a>
          </div>
          <div className='btns'>
            <VariousBtn {...headerBtnMes}/>
          </div>
          <div className='songWord' style={showOpenTag ? {height: '300px'} : {}}>
            {lyric}
          </div>
          {showOpenTag ? openTag('open','展开') : openTag('close', '收起')}
        </div>
      </div>
    </MainLeft>
  )
})

export default SongLeft