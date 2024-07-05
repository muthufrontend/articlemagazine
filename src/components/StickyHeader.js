import Header from './Header';
import React, { useState, useEffect } from 'react';


  function StickyHeader() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 150) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
    return (

        <div className={isSticky ? 'header is-sticky' : 'header'}>
           <Header/>
        </div>

    );
  }
  export default StickyHeader;