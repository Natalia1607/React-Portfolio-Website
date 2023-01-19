import React from 'react';
import './aboutStyles.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>GetTo Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore, iusto ducimus commodi nisi reiciendis possimus sunt ipsa accusantium tenetur repellendus totam saepe corporis quia, minima, ab ratione fugit nulla.
            Praesentium inventore, tempora aliquam cumque et, accusamus sequi quia autem voluptas a incidunt, atque aspernatur voluptatem. Mollitia soluta iusto accusamus pariatur, aliquid veritatis similique voluptas dolorem quasi officia ratione quo?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
} 

export default About
