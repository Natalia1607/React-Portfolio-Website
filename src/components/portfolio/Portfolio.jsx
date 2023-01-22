import React from 'react';
import './portfolioStyles.css';
import IMG1 from '../../assets/portfolio1.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title',
    github: 'https://github.com/Natalia1607',
    demo: 'https://github.com/Natalia1607'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Title2',
    github: 'https://github.com/Natalia1607',
    demo: 'https://github.com/Natalia1607'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Title3',
    github: 'https://github.com/Natalia1607',
    demo: 'https://github.com/Natalia1607'
  },
];

const Portfolio = () => {
  return ( 
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio