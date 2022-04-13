import styled from 'styled-components'
import Skills from '../components/Skills'
import Header from '../components/Header'

const Skillset = () => {
   return (
      <Container>
         <Header />
         <Upper>
            <Title>
               <Headline>Skillset</Headline>
               <Outline>Web/Motion/Design</Outline>
            </Title>
            <Desc>
               <p>
                  私のスキルセットはすべて独学です。
                  <br />
                  それらはすべて信頼できませんが、
                  <br />
                  私を愛してください。
               </p>
            </Desc>
         </Upper>
         <Lower>
            <AnimeWrapper>
               <Skills />
            </AnimeWrapper>
         </Lower>
      </Container>
   )
}

const Container = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   position: relative;
`

const Upper = styled.div`
   height: 50%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 0 3rem;
   max-width: 900px;
   margin: auto;
`

const Lower = styled.div`
   border-top: 1px solid var(--text);
   height: 50%;
`

const AnimeWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   animation: right-to-in 1.5s 0s both cubic-bezier(0, 0, 0.35, 0.98);

   @keyframes right-to-in {
      from {
         transform: translateX(100%);
      }
      to {
         transform: translateX(0);
      }
   }
`

const Headline = styled.h1`
   color: var(--text);
   font-size: 3.6rem;
   font-weight: bold;
   font-family: var(--base-font);
   letter-spacing: 0.2rem;
`

const Outline = styled.h2`
   font-size: 2.4rem;
   font-weight: bold;
   color: transparent;
   -webkit-text-stroke: 1px var(--text);
   text-stroke: 1px var(--text);
   letter-spacing: 0.2rem;
`

const Title = styled.div``

const Desc = styled.div`
   color: var(--text);
   font-size: 1.2rem;
   line-height: 1.7;
   letter-spacing: 0.2rem;
`

export default Skillset
