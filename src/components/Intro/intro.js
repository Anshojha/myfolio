import React from 'react'
import bg from  '../../assets/image.png'
import hireMeImg from '../../assets/hireme.png';
import './intro.css';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
     <section id="intro">
        <div className="introContent">
           <span className='hello'>Hello,</span>
           <span className='introText'>I'm <span className='introName'>smith</span>  <br/>web developer</span>
           <p className="introPara">I am a experinced web developer with experinced in creating<br/> visual appealing and user friendly websites</p>
           <Link><button className="introBtn"><img src={hireMeImg} className='btnImg' alt="" srcset="" />Hire me</button></Link>
        </div>
        <img src={bg} className='bg' alt="" />
     </section>
  )
}

export default Intro;
