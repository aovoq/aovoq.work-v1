import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CursorFollow = () => {
   const [pos, setPos] = useState({ x: 0, y: 0 })
   const [opacity, setOpacity] = useState(0)

   useEffect(() => {
      document.addEventListener('mousemove', (e) => {
         setOpacity(1)
         setTimeout(() => {
            setPos({ x: e.clientX, y: e.clientY })
         }, 100)
      })
      document.addEventListener('mouseleave', (e) => {
         setOpacity(0)
         setPos({ x: e.clientX, y: e.clientY })
      })
   }, [])

   return (
      <CursorFollwer
         style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: `${opacity}`,
         }}></CursorFollwer>
   )
}

const CursorFollwer = styled.div`
   position: fixed;
   width: 60px;
   height: 60px;
   border-radius: 100%;
   transform: translate(-50%, -50%);
   background-color: var(--accent);
   z-index: 999;
   pointer-events: none;
   mix-blend-mode: overlay;
`

export default CursorFollow
