import Skills from './components/Skills'
import RouterConfig from './utils/RouterConfig'
import styled from 'styled-components'

function App() {
   return (
      <Root>
         <RouterConfig />
      </Root>
   )
}

const Root = styled.main`
   overflow: hidden;
   background-color: var(--bg);
   width: 100vw;
   height: 100vh;
`

export default App
