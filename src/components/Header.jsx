import styled from 'styled-components'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = (props) => {
   return (
      <>
         <Logo>
            <Link to='/'>voq</Link>
         </Logo>
         {!props.home && (
            <Back>
               <Link to='/'>
                  <span>BACK</span>
                  <AiOutlineRollback />
               </Link>
            </Back>
         )}
      </>
   )
}

Header.defaultProps = {
   home: false,
}

const Logo = styled.h1`
   position: absolute;
   font-size: 2rem;
   font-weight: bold;
   top: 2rem;
   left: 3rem;
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

export default Header
