import { useEffect, useState } from "react"

// 打印滚动位置
export const useScrollPosition = () => {
  const [position, setPosition] = useState(0)
  const getPosition = () => {
    setPosition(window.scrollY)
  }
  useEffect(() =>{
    document.addEventListener('scroll', getPosition)
    return ()=>{
      document.removeEventListener('scroll', getPosition)
    }
  })
  return position
}