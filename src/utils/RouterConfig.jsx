import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Skillset from '../pages/Skillset'
import NotFound from '../pages/NotFound'

const RouterConfig = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='skillset' element={<Skillset />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}

export default RouterConfig
