import Image from 'next/image';
import React from 'react';
import navber from '../components/Navber.css'
import csdulogo from '../assets/CSEDULogo.png'
const Navber = () => {
    return (
        <div id="header">
          <div>
            <a href="#">
              <Image src={csdulogo}   height={400}  width={500} alt="" ></Image>
            </a>
          </div>
        <div>
          <ul id="navbar">
            <li><a class="active" href="./HTML/home.html">Home</a></li>
            <li><a href="./HTML/event.html">Event</a></li>
            <li><a href="./HTML/news.html">News</a></li>
            <li><a href="./HTML/about.html">About</a></li>
            <li><a href="./HTML/contact.html">Contact</a></li>
            <a href="./HTML/login.html"><button class="normal">LogIn</button></a>
            <a href="#" id="close"><i class="far fa-times"></i></a>
          </ul>
      </div>
      <div id="mobile">
        <button>Open</button>
      </div>
      </div>
    );
};

export default Navber;