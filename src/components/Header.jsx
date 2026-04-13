"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <img src="/assets/logo.png" alt="mula logo" className="logo-img" />
          </Link>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>홈</Link>
          <Link href="/guide" onClick={() => setIsMobileMenuOpen(false)}>안내</Link>
          <Link href="/news" onClick={() => setIsMobileMenuOpen(false)}>뉴스/블로그</Link>
          <Link href="/qna" onClick={() => setIsMobileMenuOpen(false)}>QnA</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>문의하기</Link>
          <a href="https://www.mula.co.kr/" target="_blank" rel="noopener noreferrer" className="shop-link" onClick={() => setIsMobileMenuOpen(false)}>쇼핑몰 가기</a>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
