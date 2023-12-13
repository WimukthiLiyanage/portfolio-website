import React from 'react'
import './services.css'
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container sesrvices_container'>
        <article className='services'>
          <div className='service_hedder'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services_list'>
            <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
          </ul>
        </article>

        <article className='services'>
          <div className='service_hedder'>
            <h3>Web Development</h3>
          </div>

          <ul className='services_list'>
            <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           
          </ul>
        </article>

        <article className='services'>
          <div className='service_hedder'>
            <h3>Graphic Design</h3>
          </div>

          <ul className='services_list'>
            <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Creative design</p>
           </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services