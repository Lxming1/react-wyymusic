import React, { memo, useEffect, useState } from 'react'
import { useScrollPosition } from 'common/myHooks';
import './style.css'

const GoTop = memo(() => {
  const position = useScrollPosition()
  const [showGoTopBtn, setShowGoTopBtn] = useState(false)
  useEffect(() => {
    setShowGoTopBtn(position > 0)
  }, [position])

  const goTopFun = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {showGoTopBtn && <div className="goTop" onClick={e => goTopFun()}/>}
    </div>
  )
})

export default GoTop