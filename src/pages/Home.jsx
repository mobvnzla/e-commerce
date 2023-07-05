import { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';

function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      <Navbar setIsMobileNavOpen={setIsMobileNavOpen} />
      <Hero />
    </>
  );
}

export default Home;
