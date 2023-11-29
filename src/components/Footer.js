import React from 'react';
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                <img src={logo} alt=''/>
                    <p>Family owned Mediterranean restaurant based in Chicago, focused on traditional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Lakeside, Illinois, Chicago </li>
                        <li>Phone Number: <br/> + 1 312-555-3890 </li>
                        <li>Email: <br/> LittleLemon@gmail.com </li>
                    </ul>
                </div>


                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twiiter</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
};


export default Footer;