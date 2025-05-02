import React from 'react';
import {Link} from 'react-router-dom';
import bannerIMG from '../images/restauranfood.jpg'

function Header(){
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Filler text line number oneEven more filler text wow! Little Lemon is a very nice place to go Filler text line number one Even more filler text wow! Little Lemon is a very nice place to go</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve a Table</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerIMG} alt="banner image"></img>
                </div>
            </section>
        </header>
    )
}

export default Header;