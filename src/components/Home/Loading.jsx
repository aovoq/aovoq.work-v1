import styled from 'styled-components'

const Loading = (props) => {
   const allAnimationEnded = () => {
      props.loadingEnd()
   }

   return (
      <Container>
         <Outer>
            <Borders>
               <Border />
               <Border />
               <Border />
               <Border />
            </Borders>
            <Inner>
               <High>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 100}ms` }}>w</span>
                  </CharWrapper>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 0}ms` }}>h</span>
                  </CharWrapper>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 300}ms` }}>o</span>
                  </CharWrapper>
               </High>
               <Middle>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 200}ms` }}>a</span>
                  </CharWrapper>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 700}ms` }}>r</span>
                  </CharWrapper>
                  <CharWrapper>
                     <span
                        onAnimationEnd={() => {
                           allAnimationEnded()
                        }}
                        style={{ animationDelay: `${450 + 900}ms` }}>
                        e
                     </span>
                  </CharWrapper>
               </Middle>
               <Low>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 800}ms` }}>y</span>
                  </CharWrapper>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 500}ms` }}>o</span>
                  </CharWrapper>
                  <CharWrapper>
                     <span style={{ animationDelay: `${450 + 600}ms` }}>u</span>
                  </CharWrapper>
               </Low>
            </Inner>
         </Outer>
      </Container>
   )
}

const Container = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: var(--text);
   font-family: var(--base-font);
`

const Outer = styled.div`
   width: 100%;
   height: 100%;
`

const Inner = styled.div`
   padding: 2.4rem;
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   div {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 2rem;
      line-height: 1;
   }
`

const Borders = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   overflow: hidden;
`
const Border = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   border: 3px;
   border-color: var(--text);
   &:nth-child(1) {
      border-top-style: solid;
      transform: translate(105%, 0%);
      animation: slide-in 150ms 0ms forwards cubic-bezier(0.35, 0, 0.65, 0.19);
   }
   &:nth-child(2) {
      border-left-style: solid;
      transform: translate(0%, -105%);
      animation: slide-in 150ms 150ms forwards cubic-bezier(0.35, 0.11, 0.6, 0.31);
   }
   &:nth-child(3) {
      border-bottom-style: solid;
      transform: translate(-105%, 0%);
      animation: slide-in 150ms 300ms forwards cubic-bezier(0.4, 0.5, 0.6, 0.89);
   }
   &:nth-child(4) {
      border-right-style: solid;
      transform: translate(0%, 105%);
      animation: slide-in 150ms 450ms forwards cubic-bezier(0.31, 0.69, 0.54, 0.98);
   }
   @keyframes slide-in {
      to {
         transform: translate(0%, 0%);
      }
   }
`

const CharWrapper = styled.div`
   overflow: hidden;
   & > span {
      animation-name: slide-in;
      animation-duration: 300ms;
      animation-delay: 450ms;
      animation-fill-mode: forwards;
   }
`

const High = styled.div`
   & > div:nth-of-type(1) > span {
      transform: translate(-100%, -100%);
   }
   & > div:nth-of-type(2) > span {
      transform: translate(0%, -100%);
   }
   & > div:nth-of-type(3) > span {
      transform: translate(100%, 100%);
   }
`
const Middle = styled.div`
   & > div:nth-of-type(1) > span {
      transform: translate(-100%, 0%);
   }
   & > div:nth-of-type(2) > span {
      transform: translate(0%, 100%);
   }
   & > div:nth-of-type(3) > span {
      transform: translate(100%, 0%);
   }
`
const Low = styled.div`
   & > div:nth-of-type(1) > span {
      transform: translate(-100%, 100%);
   }
   & > div:nth-of-type(2) > span {
      transform: translate(0%, -100%);
   }
   & > div:nth-of-type(3) > span {
      transform: translate(0%, -100%);
   }
`

export default Loading
