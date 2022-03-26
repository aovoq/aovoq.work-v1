import styled from 'styled-components'

const Skill = (props) => {
   return (
      <Container>
         <Icon>{props.component}</Icon>
         <TextBox>
            <Text
               style={{
                  animation: `dropdown ${1000 - 50 * props.index}ms
                  ${400 + 90 * props.index}ms both`,
               }}>
               {props.name}
            </Text>
         </TextBox>
      </Container>
   )
}

const Container = styled.div`
   color: var(--text);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.1rem;
`

const Icon = styled.div`
   height: 2rem;
   font-size: 2rem;
   line-height: 1;
`

const TextBox = styled.div`
   padding-top: 0.7rem;
   width: 100%;
   overflow: hidden;
`

const Text = styled.div`
   writing-mode: vertical-rl;
   font-size: 1.6rem;
   line-height: 2rem;
   animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
   /* animation: dropdown 0.4s 0.2s both; */

   @keyframes dropdown {
      from {
         transform: translateY(-120%);
      }
      to {
         transform: translateY(0);
      }
   }
`

export default Skill
