import {Link} from 'react-router-dom'
import img1 from './images/TEJ.jpg'
import React from 'react'
import Header from './Header'
import './Home.css'
const Home = () => {
  return (
    <div >  
       <Header/>
        <div className="home">
            <img src={img1} align="right" /> 
            <h1>I am TEJA </h1>
            <div className="paras">
            <p1>I'm an COMPUTER SCIENCE student at Raghu. My roll number is 223J1A05B9. I come from a supportive family. My father, KOTESWAR RAO, is a Businesess man, and my mother, RAJINI, is a homemaker. I have a ELDER brother, VARUN, who is currently pursuring in btech at seshadirao engineering college, vijayawada. My long-term goal is to become a Fullstack developer. </p1>
            </div>

           <Link to="/about"> <button>About Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
        </div>


    </div>
  )
}

export default Home
