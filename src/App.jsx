
import './App.css'
import Head from './components/head/Head'
import Footer from './components/footer/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Career from './pages/tools/Career'
import Pricing from './pages/price/Pricing'
import Start from './pages/free/Start'
import Tampletes from './posts/tampletes/Tampletes'
import ViewAllLetter from './posts/view/letters/ViewAllLetter'
import ViewAllEnvit from './posts/view/envit/ViewAllEnvit'
import ViewAllResume from './posts/view/resume/ViewAllResume'
import Messageus from './pages/message/Messageus'
import Startfree from './pages/start/Startfree'

function App() {

  return (
    <>
    <BrowserRouter>
    <Head />
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Career />} path='/careerTools'></Route>
          <Route element={<Pricing />} path='/priceOfTampletes'></Route>
          <Route element={<Start />} path='/free'></Route>
          <Route element={<Tampletes />} path='/tampletes'></Route>
          <Route element={<Startfree />} path='/Startfree'></Route>
          {/* view */}
                 <Route element={<ViewAllLetter />} path='/ViewAllLetter'></Route>
                 <Route element={<ViewAllEnvit />} path='/ViewAllEnvit'></Route>
                 <Route element={<ViewAllResume />} path='/ViewAllResume'></Route>
              <Route element={<Messageus />} path='/message'></Route>
        </Routes>
    <Footer />
    </BrowserRouter> 
    </>
  )
}

export default App
