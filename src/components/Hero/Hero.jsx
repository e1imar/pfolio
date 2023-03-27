import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    const title = document.querySelector('.error_title')

    const light = document.onmousemove = function(e) {
      let x = e.pageX - window.innerWidth/2;
      let y = e.pageY - window.innerHeight/2;
      
      title.style.setProperty('--x', x + 'px')
      title.style.setProperty('--y', y + 'px')
    }

    document.addEventListener('mousemove', light)

    const shadow = function(e) {
      let x = e.pageX - window.innerWidth/2;
      let y = e.pageY - window.innerHeight/2;

      let rad = Math.atan2(y, x).toFixed(2); 
      let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/10); 

      let x_shadow = Math.round(length * Math.cos(rad));
      let y_shadow = Math.round(length * Math.sin(rad));

      title.style.setProperty('--x-shadow', - x_shadow + 'px')
      title.style.setProperty('--y-shadow', - y_shadow + 'px')

    }

    title.addEventListener('mousemove', shadow)

    return () => {
      document.removeEventListener('mousemove', light)
      title.removeEventListener('mousemove', shadow)
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      {/* <Container> */}
          <div className="error_title">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              {/* <span className="text-color-main">{name || 'Elmar'}</span> */}
              {name || 'Elmar'}
              <br />
              {subtitle || "I'm a web developer."}
            </h1>
          </div>
          {/* <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p> */}
      {/* </Container> */}
    </section>
  );
};

export default Header;
