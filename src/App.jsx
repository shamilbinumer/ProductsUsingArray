import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import IndexPage from './Components/IndexPage/IndexPage'
import ProdDetails from './Components/ProdDetails/ProdDetails'

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' Component={IndexPage} />
      <Route path='/prodDetails/:id' Component={ProdDetails} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
