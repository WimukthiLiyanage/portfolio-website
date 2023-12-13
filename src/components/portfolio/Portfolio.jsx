import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pri1.png'
import IMG2 from '../../assets/pri2.png'
import IMG3 from '../../assets/pri3.png'
import IMG4 from '../../assets/pri4.png'
import IMG5 from '../../assets/pri5.png'
import IMG6 from '../../assets/pri6.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Reent Work</h5>
      <h2>Portfolio</h2>
        
      <div className='container portfolio_container'>
        <article className='Portfolio_item'>
          <div className='Portfolio_item_image'>
          <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className='Portfolio_item_cta'>
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://github.com" className=' btn_primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

        <article className='Portfolio_item'>
          <div className='Portfolio_item_image'>
           <img src={IMG2} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className='Portfolio_item_cta'>
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://github.com" className='btn_primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

        <article className='Portfolio_item'>
          <div className='Portfolio_item_image'>
          <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className='Portfolio_item_cta'>
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://github.com" className='btn_primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

        <article className='Portfolio_item'>
          <div className='Portfolio_item_image'>
          <img src={IMG4} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className='Portfolio_item_cta'>
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://github.com" className=' btn_primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

        <article className='Portfolio_item'>
          <div className='Portfolio_item_image'>
           <img src={IMG5} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className='Portfolio_item_cta'>
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://github.com" className=' btn_primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

        <article className='Portfolio_item'>
          <div className='Portfolio_item_image'>
           <img src={IMG6} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className='Portfolio_item_cta'>
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://github.com" className=' btn_primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
      </div>



    </section>
    
  )
}

export default Portfolio