import './MobileNav.css';

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <>
      <div className={`mobile-nav ${isOpen ? 'openned' : 'closed'}`}>
        <span
          onClick={() => {
            setIsOpen(false);
          }}
          class='material-symbols-outlined'
        >
          close
        </span>
        <ul className='mobile-nav__links'>
          <li className='mobile-nav__link'>
            <a href=''>CATEGORIES</a>
          </li>
          <li className='mobile-nav__link'>
            <a href=''>LAMPS</a>
          </li>
          <li className='mobile-nav__link'>
            <a href=''>PRODUCT PAGE</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
