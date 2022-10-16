import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import About from "./components/About"
import Main from "./components/Main"
import Footer from "./components/Footer"


export default function App(){
    return(
        <div className="container">
           <Header />
           <About />
           <Main />
           <Footer />
        </div>
    )
}