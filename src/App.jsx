import { Route, Routes } from 'react-router-dom';
import './index.css';
import { Home } from './routes/Home';
import { Projects } from './routes/Projects';
import { About } from './routes/About';
import { Contact } from './routes/Contact';

export function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  );
}

