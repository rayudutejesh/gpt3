import React from 'react'
import './App.scss'
import {Navbar,CTA, Brand,Scroll } from './components/index.js'
import {Blog , GPT , Footer , Header , Possibility} from './containers/index.js'
import { Features } from './containers/index.js'


const App = () => {
  return (
    <div>
        <div className="gradient--bg">
          <Navbar />   
          <Header />       
        </div>
        <Brand />
        <GPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        <Scroll />
        
    </div>
  )
}

export default App;