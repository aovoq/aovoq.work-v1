import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import profileImg from '../assets/aovoq.jpg'
import { IoClose } from 'react-icons/io5'
import { FaAsterisk } from 'react-icons/fa'
import BackLoop from '../components/Home/BackLoop'
import Loading from '../components/Home/Loading'

const Home = () => {
   const [isLoading, setIsLoading] = useState(true)

   const loadingEnd = () => {
      setIsLoading(false)
   }

   return (
      <Container>
         <Loading
            loadingEnd={() => {
               loadingEnd()
            }}
         />
         {!isLoading && (
            <>
               <Header home />

               <Kanji>碧</Kanji>
               <ProfileWrapper>
                  <ProfileImg />
               </ProfileWrapper>

               <Name>
                  {'Ao Hirata'.split('').map((c, i) => {
                     return (
                        <span
                           className={c == ' ' ? null : 'fadeIn'}
                           style={{
                              animationDelay: c == ' ' ? null : `${0.6 - (0.2 + 0.03 * i)}s`,
                           }}
                           key={i}>
                           {c}
                        </span>
                     )
                  })}
               </Name>

               <URL>
                  {'://aovoq.work'.split('').map((c, i) => {
                     return (
                        <span style={{ animationDelay: `${50 * (i + 1)}ms` }} key={i}>
                           {c}
                        </span>
                     )
                  })}
                  <span className='icon' style={{ animationDelay: `${50 * (13 + 1)}ms` }}>
                     <FaAsterisk color='hsl(54, 100%, 55%)' size='1.5rem' />
                  </span>
               </URL>

               <Links>
                  {['about', 'works', 'skillset', 'contact'].map((item, i) => (
                     <div className='wrapper' key={item}>
                        <div className='cover'></div>
                        <Link to={item}>
                           <IoClose size='1.5rem' />
                           <span>{item}</span>
                        </Link>
                     </div>
                  ))}
               </Links>

               <Socials>
                  <Social>
                     <a href='https://instagram.com/aovoq'>IN</a>
                  </Social>
                  <Social></Social>
                  <Social>
                     <a href='https://twitter.com/ao_voq'>TW</a>
                  </Social>
                  <Social>
                     <a href='https://facebook.com/aovoq'>FB</a>
                  </Social>
               </Socials>

               <BackLoop />
            </>
         )}
      </Container>
   )
}

const Links = styled.ul`
   padding: 2rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   position: absolute;
   z-index: 10;
   top: 50%;
   right: 15%;
   transform: translateY(-50%);
   font-size: 2rem;
   letter-spacing: 0.5rem;
   text-align: left;
   font-family: var(--base-font);
   a {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      visibility: hidden;
   }

   .cover {
      position: absolute;
      width: 180%;
      left: -30%;
      height: 110%;
      background: var(--accent);
      transform: scaleX(0);
   }
   .wrapper {
      position: relative;
      &:nth-of-type(1) {
         a {
            animation: link-visibility 1ms 0.9s forwards;
         }
         .cover {
            animation: linksCover-in 0.2s 0.7s ease-in forwards,
               linksCover-out 0.2s 0.9s ease-out forwards;
         }
      }
      &:nth-of-type(2) {
         a {
            animation: link-visibility 1ms 1s forwards;
         }
         .cover {
            animation: linksCover-in 0.2s 0.8s ease-in forwards,
               linksCover-out 0.2s 1s ease-out forwards;
         }
      }
      &:nth-of-type(3) {
         a {
            animation: link-visibility 1ms 1.1s forwards;
         }
         .cover {
            animation: linksCover-in 0.2s 0.9s ease-in forwards,
               linksCover-out 0.2s 1.1s ease-out forwards;
         }
      }
      &:nth-of-type(4) {
         a {
            animation: link-visibility 1ms 1.2s forwards;
         }
         .cover {
            animation: linksCover-in 0.2s 1s ease-in forwards,
               linksCover-out 0.2s 1.2s ease-out forwards;
         }
      }
   }
   @keyframes link-visibility {
      to {
         visibility: visible;
      }
   }
   @keyframes linksCover-in {
      from {
         transform-origin: left;
         transform: scaleX(0);
      }
      to {
         transform-origin: left;
         transform: scaleX(1);
      }
   }
   @keyframes linksCover-out {
      from {
         transform-origin: right;
         transform: scaleX(1);
      }
      to {
         transform-origin: right;
         transform: scaleX(0);
      }
   }
`

const Socials = styled.ul`
   color: var(--text);
   position: absolute;
   z-index: 10;
   bottom: 1.9rem;
   right: 3rem;
   font-size: 1.6rem;
   font-family: Monaco, Courier New, Consolas, monospace;
   font-weight: bold;
   display: flex;
   flex-wrap: wrap;
   flex-direction: row-reverse;
   gap: 0.5rem;
   line-height: 1;
   animation: socials-slide-in 0.3s 0s;
   @keyframes socials-slide-in {
      from {
         transform: translateX(150%);
      }
   }
`

const Social = styled.li`
   &:nth-child(2) {
      width: 100%;
   }
   &:last-child {
      padding-right: 0.5rem;
   }
`

const Name = styled.h1`
   position: absolute;
   z-index: 10;
   bottom: 5rem;
   left: 50%;
   transform: translate(-50%);
   font-size: 3rem;
   letter-spacing: 1.5rem;
   font-family: Helvetica Neue, Helvetica, sans-serif;
   color: var(--text);
   overflow: hidden;

   .fadeIn {
      display: inline-block;
      transform: translateY(115%);
      animation-duration: 0.3s;
      animation-fill-mode: both;
      animation-name: bottom-to-fadeIn;
      animation-timing-function: cubic-bezier(0.59, 0.19, 0.44, 0.8);
   }

   @keyframes bottom-to-fadeIn {
      from {
         transform: translateY(115%);
      }
      to {
         transform: translateY(0%);
      }
   }
`

const ProfileWrapper = styled.div`
   position: absolute;
   z-index: 10;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   margin: auto;
   width: 400px;
   height: 400px;
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: var(--text);
   /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='500' ry='500' stroke='%23d7dfe0' stroke-width='10' stroke-dasharray='30%25%2c 10%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e"); */
   animation: profileImg-scale-in 0.5s cubic-bezier(0.27, 0.91, 0.82, 1) 0s;
   @keyframes profileImg-scale-in {
      from {
         transform: scale(0) rotate(-140deg);
      }
      to {
         transform: scale(1) rotate(0deg);
      }
   }
`

const ProfileImg = styled.div`
   width: 99%;
   height: 99%;
   border-radius: 100%;
   background: url(${profileImg});
   filter: grayscale(80%);
   background-size: 245%;
   background-position: 55% 0%;
`

const Kanji = styled.div`
   position: absolute;
   z-index: 10;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 30rem;
   font-family: serif;
   /* font-weight: bold; */
   color: transparent;
   -webkit-text-stroke: 1px var(--text);
   text-stroke: 1px var(--text);
   transform-origin: bottom right;
   animation: kanji-scale-in 0.7s 0.3s ease-out both;
   @keyframes kanji-scale-in {
      0% {
         opacity: 0;
         transform: translate(-50%, -50%);
      }
      100% {
         opactiy: 1;
         transform: translate(-105%, -70%);
      }
   }
`

const Container = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
   position: relative;
`

const URL = styled.span`
   position: absolute;
   z-index: 10;
   transform-origin: bottom left;
   transform: rotate(-90deg);
   left: 4rem;
   bottom: 2rem;
   font-size: 1.5rem;
   letter-spacing: 0.5rem;
   font-family: 'Helvetica Neue', sans-serif;
   color: var(--text);
   span {
      display: inline-block;
      animation: url-slide-in 300ms both;
      @keyframes url-slide-in {
         from {
            transform: translateY(-10rem);
         }
      }
   }
   .icon {
      position: absolute;
      top: 0;
   }

   svg {
      position: absolute;
      top: 0.3rem;
      animation: asterisk-spin 4s 0s linear infinite;
      @keyframes asterisk-spin {
         to {
            transform: rotate(360deg);
         }
      }
   }
`

export default Home
