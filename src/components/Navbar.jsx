import './Navbar.css';
import { useState } from 'react';

function Navbar({ setIsMobileNavOpen }) {
  const [isSticky, setIssticky] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      setIssticky(true);
    } else {
      setIssticky(false);
    }
  }
  document.addEventListener('scroll', handleScroll);

  return (
    <>
      <header className='header container'>
        <nav className={`nav-bar ${isSticky ? 'scrolling' : ''}`}>
          <div className='nav-bar__left-side'>
            <a
              href=''
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span className='logo'></span>
            </a>
          </div>
          <div className='nav-bar__right-side'>
            <ul className='nav-bar__links'>
              <li>
                <a href='' className='notMobile'>
                  CATEGORIES
                </a>
              </li>
              <li>
                <a href='' className='notMobile'>
                  PRODUCT PAGE
                </a>
              </li>
              <li>
                <a href='' className='nav-bar__icon'>
                  <span className='material-symbols-outlined'>shopping_cart</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsMobileNavOpen(true);
                  }}
                  className='mobile nav-bar__icon'
                >
                  <span className='material-symbols-outlined icon--menu'>menu</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
