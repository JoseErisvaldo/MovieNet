import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import MovieDetails from "./Pages/MovieDetails";
import Footer from "./Components/CompFooter";

export default function RoutesApp () {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<MovieDetails/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}