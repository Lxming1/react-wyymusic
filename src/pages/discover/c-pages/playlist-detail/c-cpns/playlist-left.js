import React, { memo, useMemo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { getImgSize, formatDate } from 'utils/format-utils'
import VariousBtn from 'components/variousBtn'

const PlaylistLeft = memo(() => {
  const { playlistItem } = useSelector(state => ({
    playlistItem: state.getIn(['discoverInfo','playlistDetailMes'])
  }), shallowEqual)
  const creator = playlistItem.creator
  // 头像
  const nickPic = creator && getImgSize(playlistItem.creator.avatarUrl, 35)
  // 作者名
  const nickname = creator && creator.nickname
  // icon
  const creatorDetail = creator && creator.avatarDetail && creator.avatarDetail.identityIconUrl
  // 创建时间
  const createTime = value => {
    let date = new Date(value);
    return formatDate(date, 'yyyy-MM-dd')
  }
  // 按钮信息
  const headerBtnMes = useMemo(() => ({
    privileges: playlistItem.privileges,
    subscribedCount: playlistItem.subscribedCount,
    shareCount: playlistItem.shareCount,
    commentCount: playlistItem.commentCount
  }), [
    playlistItem.privileges,
    playlistItem.subscribedCount,
    playlistItem.shareCount,
    playlistItem.commentCount
  ])
  // 标签
  const tags = playlistItem.tags
  // 介绍
  const introduce = playlistItem.description
  // 循环输出标签
  const showTag = tags && (
    tags.map(item => (
      <a href="#/" key={item} className="sprite_button">
        <i className="sprite_button">{item}</i>
      </a>
    ))
  )
  return (
    <div>
      <div className="leftHeader">
        <div className="imgCover">
          <img src={getImgSize(playlistItem.coverImgUrl, 200)} alt={playlistItem.name} />
          <span className='imgcover sprite_covor'></span>
        </div>
        <div className="playlistIntroduce">
          <div className="title">
            <i className='sprite_icon2 titleIcon'>
              <span className="sprite_R R"/>
            </i>
            <span className="itemName">{playlistItem.name}</span>
          </div>
          <div className="author">
            <img src={nickPic} alt={nickname}/>
            <a href={`#/user/home?id=${playlistItem.userId}`} style={{color: '#0c73c2', marginLeft: '10px'}}>{nickname}</a>
            {creatorDetail && <img src={creatorDetail} style={{height: '13px', width: '13px'}} alt=''/>}
            <span style={{color: '#999', marginLeft: '15px'}}>{createTime(playlistItem.createTime)} 创建</span>
          </div>
          <div className="btns">
            <VariousBtn {...headerBtnMes}/>
          </div>
          <div className="mark">
            标签：{showTag}
          </div>
          <p className="introduce">
            介绍： {introduce}
            {/* <span style={{whiteSpace: 'pre-wrap'}}>{introduce}</span> */}
          </p>
          <div className="open">展开<i className="sprite_icon2"></i></div>
        </div>
      </div>
    </div>
  )
})

export default PlaylistLeft