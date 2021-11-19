import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/dimensionHook';
import Menu from './components/Menu';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [workWithMobileMenu, setWorkWithMobileMenu] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 1024) {
      setWorkWithMobileMenu(true)
    }
  }, [])
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">
          Bibliotecas de Provas <span className="span-text-title">UCAN</span>
        </h1>
        <span className="header-motivation-text">
          Nos ajude a ajudar!
        </span>
      </div>


      {
        workWithMobileMenu &&
        <button
          className="mobile-menu-hamburguer"
          style={{
            backgroundColor: isMobileMenuOpen ? 'red' : '#00b2ff'
          }}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          }>
          {
            !isMobileMenuOpen ?
              <i className="fas fa-bars"></i>
              :
              <i className="fas fa-times"></i>
          }
        </button>
      }

      {
        workWithMobileMenu ?
          isMobileMenuOpen ? <Menu /> : <></>
          :
          <Menu />
      }


    </div>
  );
}

export default NavBar;