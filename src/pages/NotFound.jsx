import { AiOutlineRollback } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
   const navigate = useNavigate()
   return (
      <Container
         onClick={() => {
            navigate('/')
         }}>
         <Back>
            <Link to='/'>
               <span>BACK</span>
               <AiOutlineRollback />
            </Link>
         </Back>
         <Text>
            <Link to='/'>なぜあなたはこのURLを踏みますか？</Link>
         </Text>
      </Container>
   )
}

const Container = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Text = styled.h1`
   color: var(--text);
   font-size: 1rem;
   letter-spacing: 1.5rem;
`

const Back = styled.div`
   position: absolute;
   top: 2rem;
   right: 3rem;
   font-size: 2rem;
   a {
      display: flex;
      align-items: center;
   }
   span {
      font-size: 1rem;
      font-weight: bold;
   }
`

export default NotFound
