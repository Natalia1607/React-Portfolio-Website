import React from 'react';
import {FaPinterestSquare, FaGithub, FaBehance} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.behance.net/nataliagilyazo" target='_blank'><FaBehance /></a>
        <a href="https://github.com/Natalia1607" target='_blank'><FaGithub /></a>
        <a href="https://www.pinterest.ca/#top" target='_blank'><FaPinterestSquare /></a>
    </div>
  )
}

export default HeaderSocials