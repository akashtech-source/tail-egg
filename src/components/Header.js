import React, { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen)
  };
    return (
        <div>
            <Navbar toggle={toggle} />
            <Hero />
            <Content />
            <Footer />
        </div>
    );
};

export default Header;