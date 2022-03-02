import React, { Fragment, memo, useEffect, useMemo, useRef, useState } from 'react'
import { getImgSize, formatDate } from 'utils/format-utils'
import VariousBtn from 'components/variousBtn'

const PlHeader = memo(({playlistItem}) => {
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
  
  // 循环输出标签
  const showTag = tags && (
    tags.map((item, index) => (
      <a href="#/" key={index} className="sprite_button">
        <i className="sprite_button">{item}</i>
      </a>
    ))
  )

  // 介绍
  const introduce = (
    playlistItem.description && 
    playlistItem.description.split('\n').map((item, index) => {
      const mes = 
        item === '' ? 
        (<Fragment key={index}><br/></Fragment>) : 
        (<Fragment key={index}>{item}<br/></Fragment>)
      return mes
    }, )
  )

  const introduceRef = useRef()
  const [longIntroduce, setLongIntroduce] = useState(false)
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

  useEffect(() => {
    const showTag = 
      introduceRef.current && 
      introduceRef.current.clientHeight >= 144
    setLongIntroduce(showTag)
  }, [showTag])
  
  return (
    <div className="leftHeader">
      <div className="imgCover">
        <img src={getImgSize(playlistItem.coverImgUrl, 200)} alt={playlistItem.name} />
        <span className='imgcover sprite_covor'></span>
      </div>
      <div className="playlistIntroduce" style={{marginBottom: longIntroduce ? '39px' : '23px'}}>
        <div className="title">
          <i className='sprite_icon2 titleIcon'>
            <span className="sprite_R R"/>
          </i>
          <span className="itemName">{playlistItem.name}</span>
        </div>
        <div className="author">
          <img src={nickPic} alt={nickname}/>
          <a href={`#/user/home?id=${playlistItem.userId}`} 
            style={{color: '#0c73c2', marginLeft: '10px'}}>{nickname}</a>
          {creatorDetail && <img src={creatorDetail} className="nicknameIcon" alt=''/>}
          <span style={{color: '#999', marginLeft: '15px'}}>{createTime(playlistItem.createTime)} 创建</span>
        </div>
        <div className="btns">
          <VariousBtn {...headerBtnMes}/>
        </div>
        <div className="mark">
          标签：{showTag}
        </div>
        {
          <p ref={introduceRef} className='introduce'
            style={longIntroduce && showOpenTag ? {height: '144px'} : {}}>
            介绍： {introduce}
          </p> 
        }
        {longIntroduce && (showOpenTag ? openTag('open','展开') : openTag('close', '收起'))}
      </div>
    </div>
  )
})

export default PlHeader