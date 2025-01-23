import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieInformation from "./components/MovieInformation";
import Actors from "./components/Actors";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className="flex mt-[80px]">
      
        <main className="flex-grow p-4 ml-11">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
