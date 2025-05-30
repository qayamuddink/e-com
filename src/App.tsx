
import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ProductPage from './components/ProductPage'
import TopSellar from './components/TopSellers'
import PopularBlogs from './components/PopularBlogs'

function App() {


  return (
    <>
      <div>
        <Router>
          <div className='flex h-screen'>
            <Sidebar />
            <div className="rounded w-full flex justify-between flex-wrap">
              <Routes>
                <Route path="/" element={<MainContent/>} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
     
    </>
  )
}

export default App
