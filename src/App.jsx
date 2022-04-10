import RouterConfig from './utils/RouterConfig'
import styled from 'styled-components'
import CursorFollow from './components/CursorFollow'

function App() {
   return (
      <Root>
         <RouterConfig />
         <CursorFollow />
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
