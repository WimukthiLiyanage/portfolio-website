import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";




function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="http://linkedin.com" target='_blank'><FaLinkedin />

</a>
      <a href="http://linkedin.com" target='_blank'><FaGithubSquare />
</a>
      <a href="http://linkedin.com" target='_blank'><FaTwitterSquare />
</a>
    </div>
  )
}

export default HeaderSocials