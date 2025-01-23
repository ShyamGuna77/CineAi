


import {CssBaseline} from '@mui/material';
import{Routes, Route} from 'react-router-dom';
import Movies from './components/Movies';
import MovieInformation from './components/MovieInformation';
import Actors from './components/Actors';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <>
      <div className='flex  h-full p-8 mt-8'>
        <CssBaseline />
        <Navbar />
        <main className='grow p-8'>
        <div className='h-[70px]'>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default App
