import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

const Home = () => {
   return (
      <Container>
         <Header home />
         <Logo>HELLO, I AM...</Logo>
         <URL>https://aovoq.work</URL>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
   position: relative;
`

const Logo = styled.h1`
   display: block;
   margin-top: 15%;
   width: 100vw;
   height: 10.5rem;
   padding: 0 2rem;
   font-size: 15rem;
   line-height: 0.65;
   font-weight: bold;
   letter-spacing: 2rem;
   font-family: Helvetica Neue;
   color: var(--bg);
   background-color: var(--text);
`

const URL = styled.span`
   padding: 0 3.3rem;
   font-size: 1.5rem;
   letter-spacing: 0.5rem;
   font-family: 'Helvetica Neue', sans-serif;
   color: var(--text);
`

export default Home
