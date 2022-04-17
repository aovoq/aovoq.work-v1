import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

const NotFound = () => {
   const navigate = useNavigate()
   return (
      <Container
         onClick={() => {
            navigate('/')
         }}>
         <Header />
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

export default NotFound
