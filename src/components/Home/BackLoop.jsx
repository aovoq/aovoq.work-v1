import styled from 'styled-components'

const BackLoop = () => {
   return (
      <Container>
         <Texts>
            <div>
               {/* ここ無限ループちゃんと実装してもいいけど面倒だし する意味もなさそう */}
               <Text>Web Web Web Web Web Web Web Web Web</Text>
            </div>
            <div>
               <Text>Motion Motion Motion Motion Motion</Text>
            </div>
            <div>
               <Text>Design Design Design Design Design</Text>
            </div>
         </Texts>
         <Shapes>
            <Lines>
               {[...Array(21)].map((_, i) => {
                  return (
                     <Line
                        key={i}
                        style={{ transform: `rotate(${(360 / 21) * i}deg) translateX(300px)` }}
                     />
                  )
               })}
            </Lines>
            <Circles>
               {[...Array(20)].map((_, i) => {
                  let size = 600 + 300 * i
                  return <Circle key={i} style={{ width: `${size}px`, height: `${size}px` }} />
               })}
               <Circle className='accent' />
               <Circle className='accent2' />
            </Circles>
         </Shapes>
      </Container>
   )
}

const Shapes = styled.div`
   z-index: 1;
   opacity: 0.1;
`

const Circles = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   transform: scale(100%);

   animation: circleShape-scale-in 0.7s 0s ease-in-out forwards;
   @keyframes circleShape-scale-in {
      from {
         transform: scale(500%);
      }
   }
`

const Circle = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 100%;
   border: 2px solid var(--text);

   &.accent {
      width: calc(300px * 3 + 25px);
      height: calc(300px * 3 + 25px);
   }
   &.accent2 {
      width: calc(300px * 5 - 25px);
      height: calc(300px * 5 - 25px);
   }
`

const Lines = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   transform-origin: center center;
   transform: scale(1000%);
   animation: lineShape-scale-in 0.5s 0.4s ease-in-out forwards,
      lineShape-spin 300s 1.4s linear infinite;
   @keyframes lineShape-scale-in {
      to {
         transform: scale(100%);
      }
   }
   @keyframes lineShape-spin {
      to {
         transform: scale(100%) rotate(360deg);
      }
   }
`

const Line = styled.div`
   position: absolute;
   width: 4000px;
   height: 2px;
   background: var(--text);
   border-radius: 2px;
   transform-origin: left center;
   top: 50%;
   left: 50%;
`

const Container = styled.div``

const Texts = styled.div`
   position: absolute;
   /* opacity: 0.03; */
   opacity: 0.9;
   z-index: 5;
   display: inline-flex;
   flex-direction: column;

   div:nth-child(1) > span {
      animation: preparation 1s 0s ease-in-out, loop 500s 1s linear infinite;
   }
   div:nth-child(2) > span {
      animation: preparation 1s 0s ease-in-out, loop 500s 1s linear infinite;
   }
   div:nth-child(3) > span {
      animation: preparation 1s 0s ease-in-out, loop 500s 1s linear infinite;
   }
`

const Text = styled.span`
   display: inline-block;
   font-size: calc(100vh / 3);
   /* font-size: 33vh; */
   /* color: var(--text); */
   /* color: hsl(227, 16%, 14%); */
   color: hsl(227, 16%, 13%);
   font-weight: bold;
   font-family: var(--base-font);
   line-height: 1;
   white-space: nowrap;
   /* transform: translateX(100vw); */

   @keyframes preparation {
      from {
         transform: translateX(100vw);
      }
      to {
         transform: translateX(0vw);
      }
   }

   @keyframes loop {
      from {
         transform: translateX(0%);
      }
      to {
         transform: translateX(-100%);
      }
   }
`

export default BackLoop
