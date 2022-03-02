import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const PlaylistHeader = memo(({title, count, rightMes}) => {
  return (
    <HeaderWrapper>
      <div className="headLeft">
        <span className="title">{title}</span>
        <span className="count">{count}</span>
      </div>
      {rightMes}
    </HeaderWrapper>
  )
})

export default PlaylistHeader