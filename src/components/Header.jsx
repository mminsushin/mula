"use client";

import { useState, useEffect } from 'react';
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

  const close = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={close}
      />
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <Link href="/" onClick={close}>
              <img src="/assets/logo.png" alt="mula logo" className="logo-img" />
            </Link>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link href="/" onClick={close}>홈</Link>
            <Link href="/guide" onClick={close}>안내</Link>
            <Link href="/news" onClick={close}>뉴스/블로그</Link>
            <Link href="/qna" onClick={close}>QnA</Link>
            <Link href="/contact" onClick={close}>문의하기</Link>
            <a href="https://www.mula.co.kr/" target="_blank" rel="noopener noreferrer" className="shop-link" onClick={close}>쇼핑몰 가기</a>
          </nav>

          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
