import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './components/About';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Project from './pages/Projects';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Careers/>}  path="/career"/>
      <Route element={<Contact/>}  path="/contact"/>
      <Route element={<Project/>}  path="/project"/>
      <Route element={<Service/>}  path="/service"/>
    </Routes>
  )
}

export default App
