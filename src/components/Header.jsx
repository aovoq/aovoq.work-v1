import styled from 'styled-components'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = (props) => {
   return (
      <>
         <Logo>
            <Cover></Cover>
            <Cover></Cover>
            <Link to='/'>voq</Link>
         </Logo>
         {!props.home ? (
            <Back>
               <Link to='/'>
                  <span>BACK</span>
                  <AiOutlineRollback />
               </Link>
            </Back>
         ) : (
            <>
               <Line />
               <LineAnimation>
                  <div></div>
                  <div>
                     <div></div>
                  </div>
                  <div></div>
               </LineAnimation>
            </>
         )}
      </>
   )
}

Header.defaultProps = {
   home: false,
}

const LineAnimation = styled.div`
   > div {
      position: absolute;
      z-index: 10;
      top: 4rem;
      left: 4rem;
      right: 4rem;
      bottom: 4rem;
      opacity: 0.6;
   }
   > div:nth-of-type(1) {
      right: 0;
      left: calc((100vh - 8rem) / 2 + 4rem - 1px);
      border-bottom: 3px solid var(--text);
      animation: Line1-in 300ms 0s ease-in forwards, Line1-out 300ms 300ms ease-out forwards;
      @keyframes Line1-in {
         0% {
            transform-origin: right;
            transform: scaleX(0);
         }
         100% {
            transform-origin: right;
            transform: scaleX(100%);
         }
      }
      @keyframes Line1-out {
         0% {
            transform-origin: left;
            transform: scaleX(100%);
         }
         100% {
            transform-origin: left;
            transform: scaleX(0);
         }
      }
   }
   > div:nth-of-type(2) {
      /* これ、相対的なサイズ指定してるから、0.5pxになったときborderは小数点無視して表示されちゃう対策 (日本語力... */
      width: calc((100vh - 8rem) / 2 - 1px);
      overflow: hidden;
      > div {
         border: 3px solid var(--text);
         border-right: none;
         position: absolute;
         width: calc((100vh - 8rem) / 2);
         height: calc((100vh - 8rem));
         border-radius: 100% 0 0 100%/50% 0 0 50%;
         transform-origin: right;
         transform: rotate(-180deg);
         animation: Line2-in 300ms 300ms linear forwards, Line2-out 300ms 600ms linear forwards;
         @keyframes Line2-in {
            0% {
               transfrom: rotate(-180deg);
            }
            100% {
               transform: rotate(0deg);
            }
         }
         @keyframes Line2-out {
            0% {
               transform: rotate(0deg);
            }
            100% {
               transform: rotate(180deg);
            }
         }
      }
   }
   > div:nth-of-type(3) {
      left: calc((100vh - 8rem) / 2 + 4rem - 1px);
      border-top: 3px solid var(--text);
      transform: scaleX(0);
      animation: Line3-in 300ms 600ms ease-in forwards, Line3-out 300ms 900ms ease-out forwards;
      @keyframes Line3-in {
         0% {
            transform-origin: left;
            transform: scaleX(0);
         }
         100% {
            transform-origin: left;
            transform: scaleX(100%);
         }
      }
      @keyframes Line3-out {
         0% {
            transform-origin: right;
            transform: scaleX(100%);
         }
         100% {
            transform-origin: right;
            transform: scaleX(0);
         }
      }
   }
`

const Cover = styled.div`
   height: 120%;
   width: 240%;
   top: -10%;
   left: -70%;
   position: absolute;
   &:nth-of-type(1) {
      z-index: 2;
      transform: scaleX(0%);
      background-color: hsl(59, 93%, 65%);
      animation: cover-in 300ms 200ms ease-in forwards, cover-out 300ms 400ms ease-out forwards;
   }
   &:nth-of-type(2) {
      z-index: 1;
      transform: scaleX(0%);
      background-color: hsl(59, 73%, 50%);
      animation: cover-in 300ms 0s ease-in forwards, cover-out 400ms 500ms ease-out forwards;
   }
   @keyframes cover-in {
      0% {
         transform: scaleX(0%);
         transform-origin: left;
      }
      100% {
         transform: scaleX(100%);
         transform-origin: left;
      }
   }
   @keyframes cover-out {
      0% {
         transform: scaleX(100%);
         transform-origin: right;
      }
      100% {
         transform: scaleX(0%);
         transform-origin: right;
      }
   }
`

const Logo = styled.h1`
   position: absolute;
   z-index: 10;
   font-size: 2rem;
   font-weight: bold;
   top: 2rem;
   left: 3rem;
   > a {
      visibility: hidden;
      animation: link-visibility 1ms 500ms forwards;
      @keyframes link-visibility {
         to {
            visibility: visible;
         }
      }
   }
`

const Back = styled.div`
   position: absolute;
   z-index: 10;
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

const Line = styled.div`
   position: absolute;
   z-index: 10;
   top: 4rem;
   right: 4rem;
   width: 150px;
   height: 3px;
   border-radius: 2px;
   background-color: var(--text);
   opacity: 0;
   animation: line-opacity 0.1s 0.9s forwards;
   @keyframes line-opacity {
      to {
         opacity: 1;
      }
   }
`

export default Header
