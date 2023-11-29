import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />}/> 
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="about" element={<About/>}/>
      // </Route>
    </Routes>
    {/* <Modal open={open} onClose={() => setOpen(false)} mark={mark} loggedIn={loggedIn} grantAccess={grantAccess} denyAccess={denyAccess}/> */}
</BrowserRouter>
  )
}

export default App
