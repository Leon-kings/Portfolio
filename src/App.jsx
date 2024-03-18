import React from 'react'
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
import Login from './pages/form/login/Login'
import Register from './pages/form/registration/Register'
import Aresume from './posts/single view/resume/Aresume'
import Bresume from './posts/single view/resume/Bresume'
import Cresume from './posts/single view/resume/Cresume'
import DetailsPages from "./posts/details/DetailsPages"
// import Startfree from "./pages/start/Startfree"
import Aletter from './posts/single view/letters/Aletter'
import Bletter from './posts/single view/letters/Bletter'
import Cletter from './posts/single view/letters/Cletter'
import Aenv from './posts/single view/envitation/Aenv'
import Benv from './posts/single view/envitation/Benv'
import Request from "./components/Request/Request"
import Screate from "./components/create/official/student/Screate"
import Create from "./components/create/official/legal/Create"
function App() {

  return (
    <>
    <BrowserRouter>
    <Head />
        <Routes>
        <Route element={<Screate />} path='/Screate'></Route>
        <Route element={<Create />} path='/Create'></Route>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Career />} path='/careerTools'></Route>
          <Route element={<Pricing />} path='/priceOfTampletes'></Route>
          <Route element={<Start />} path='/free'></Route>
                  <Route element={<Login />} path='/Login'></Route>
                  <Route element={<Register />} path='/Register'></Route>
                         {/* views */}
                         <Route element={<Request />} path='/Request'></Route>
                                  {/* Letters */}
                                  <Route element={<Aletter/>} path='/Aletter'></Route>
                                  <Route element={<Bletter/>} path='/Bletter'></Route>
                                  <Route element={<Cletter/>} path='/Cletter'></Route>
                {/* Envitation */}
                <Route element={<Aenv />} path='/AEnvitation'></Route>
                <Route element={<Benv />} path='/BEnvitation'></Route>
                         <Route element={<Aresume />} path='/Aresume'></Route>
                         <Route element={<Bresume />} path='/Bresume'></Route>
                         <Route element={<Cresume />} path='/Cresume'></Route>
                         <Route path="/details/:id" component={<DetailsPages />} />
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
