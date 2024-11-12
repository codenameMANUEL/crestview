import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path="/home"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Careers/>}  path="/career"/>
      <Route element={<Contact/>}  path="/contact"/>
    </Routes>
  )
}

export default App
