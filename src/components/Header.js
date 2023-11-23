import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/vertical.jpg';

const Header = () => {
    return (
      <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, located on Maldove street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
                <Link to="/"><button aria-label='On Click'>Reserve a Table</button></Link>
            </div>

            <div className='banner-img'>
                <img src={banner} alt=''/>
            </div>
        </section>
      </header>
    )
}

export default Header;