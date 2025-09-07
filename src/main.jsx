import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/FindAnyFilm">
      <Routes>
        <Route element={<App />}>
          <Route path="/FindAnyFilm"element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
