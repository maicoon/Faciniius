import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguagesSwitch from "../LanguagesSwitch";
import logoFacinnius from '../../../public/images/logoFacinnius.png'
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [menuFixed, setMenuFixed] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setMenuFixed(true);
      } else if (window.scrollY === 0) {
        setMenuFixed(false);
      }
    });
    return () =>
      document.removeEventListener("scroll", () => {
        setMenuFixed(false);
      });
  }, []);

  return (
    <header className={`header ${menuFixed ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo"  >
          <a style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
            <Image src={logoFacinnius} alt="Logo" />
            Facinnius.
          </a>
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className={`nav__item ${router.pathname === '/' ? "active-link" : ""}`}>
              <Link href="/" className="nav__link" >
                <a>
                  <i className="ri-home-line"></i>
                  <span>Home</span>
                </a>
              </Link>
            </li>

            <li className={`nav__item ${router.pathname === '/facinnius' ? "active-link" : ""}`}>
              <Link href="/facinnius" className="nav__link ">
                <a>
                  <i className="ri-home-line"></i>
                  <span>Facinnius</span>
                </a>
              </Link>
            </li>

            <li className={`nav__item ${router.pathname === '/lista-produtos' ? "active-link" : ""}`} >
              <Link href="/lista-produtos" className="nav__link">
                <a>
                  <i className="ri-price-tag-3-line"></i>
                  <span>{t('home_heade_produtos')}</span>
                </a>
              </Link>
            </li>

            <li className={`nav__item ${router.pathname === '/locais' ? "active-link" : ""}`}>
              <Link href="/locais" className="nav__link">
                <a>
                  <i className="ri-compass-line"></i>
                  <span>{t('home_header_locais')}</span>
                </a>
              </Link>
            </li>

            <li className={`nav__item ${router.pathname === '/contato' ? "active-link" : ""}`}>
              <Link href="/contato" className="nav__link">
                <a>
                  <i className="ri-t-shirt-line"></i>
                  <span>{t('home_header_contato')}</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <i className="ri-moon-line change-theme" id="theme-button"><LanguagesSwitch /></i>
      </nav>
    </header>
  );
}