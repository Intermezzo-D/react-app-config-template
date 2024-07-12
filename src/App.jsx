import React, { Suspense, lazy } from "react"
import { Link, Routes, Route } from "react-router-dom"
import "./css/app.css"

// import Home from "./pages/Home/Home"
// import About from "./pages/About/About"

const Home = lazy(() => import(/* webpackChunkName: 'home' */"./pages/Home/Home"))
const About = lazy(() => import(/* webpackChunkName: 'about' */"./pages/About/About"))

function App() {
  return (
    <div>
      <h1 className="yesHead">Yes! Yes! Yes!!!</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>


      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App