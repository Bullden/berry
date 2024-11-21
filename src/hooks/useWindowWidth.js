import { useState, useEffect } from 'react'
export const useWindowWidth = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}
