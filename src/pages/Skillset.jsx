import styled from 'styled-components'
import Skills from '../components/Skills'

const Skillset = () => {
   return (
      <Container>
         <Upper>
            <Headline>Skillset</Headline>
         </Upper>
         <Lower>
            <Skills></Skills>
         </Lower>
      </Container>
   )
}

const Container = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const Upper = styled.div`
   height: 50%;
`

const Lower = styled.div`
   height: 50%;
`

const Headline = styled.h1`
   color: var(--text);
   font-size: 2.4rem;
   font-weight: bold;
   font-family: var(--base-font);
`

export default Skillset
