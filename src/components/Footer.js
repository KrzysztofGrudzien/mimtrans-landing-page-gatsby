import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook"
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay"

import data from "../data/data"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const { sitemap } = data

  return (
    <FooterWrapper>
      <FooterContainer className="container">
        <footer className="footer">
          <div className="footer-column">
            <h3 className="footer-title">MiMTrans - usługi transportowe</h3>
            <p>
              Nasza firma dysponuje nowoczesnymi, bezpiecznymi i wygodnymi
              autobusami różnego typu. Od małych dziewięcio i dwudziesto kilku
              osobowych busów do dużych ponad pięćdziesięcio osobowych autokarów
              turystycznych. Organizujemy m.in. przewozy dzieci i młodzieży na
              wycieczki, przewozy pracownicze, przewozy okazjonalne (na
              bankiety, konferencje, wesela i pogrzeby), wycieczki krajowe. Do
              każdego Klienta i do każdego zlecenia podchodzimy indywidualnie.
            </p>
            <h3 className="footer-title">Gdzie nas znajdziesz?</h3>
            <a
              href="http://mimtrans.pl/#start"
              className="footer-link"
              target="_blank"
            >
              <SiFacebook /> MiMTrans - usługi transportowe
            </a>
            <h3 className="footer-title">Mapa strony</h3>
            <ul className="footer-list">
              {sitemap.map(({ path, title }) => {
                return (
                  <li className="footer-list-item">
                    <Link
                      to={path}
                      className="footer-list-link"
                      activeClassName="footer-list-link-active"
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="footer-column"></div>
          <div className="footer-column">
            <div className="footer-column-address">
              <h3 className="footer-title">Wyszukiwarka połączeń na telefon</h3>
              <p>
                Pobierz wyszukiwarkę połączeń e-podróżnik.pl na telefon. Ponad
                900 przewoźników, m.in. my - MIM TRANS, a także ZTM Warszawa.
                Szybko znajdź najdogodniejsze połączenie.
              </p>
              <h3 className="footer-title">Kontakt z nami</h3>
              <p>
                USŁUGI TRANSPORTOWE Jerzy Wiśniewski Nowa Bukówka, ul.
                Rumiankowa 41 96-321 Żabia Wola Dane kontaktowe Jerzy
                Wiśniewski: 602 516 919 Tadeusz Pałka: 602 128 068 E-mail:
                mimtrans@o2.pl
              </p>
            </div>
            <div className="footer-column-app">
              <StaticImage
                src="../assets/img/mobile-app.jpg"
                alt="zdjęcie screenu aplikacji mobilnej"
                className="footer-column-image"
                layout="fullWidth"
                placeholder="tracedSVG"
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.inno.epodroznik.android"
                target="_blank"
                rel="noreferrer"
                className="footer-link-app"
              >
                <FaGooglePlay /> pobierz aplikacje z Google Play
              </a>
            </div>
          </div>
          <CopyrightFooter>
            <p>
              ©2021. Wszelkie prawa zastrzeżone przez MiMTrans - usługi
              transportowe.
            </p>
            <div>
              Projekt i wdrożenie<a href="criscode.eu"> Krzysztof Grudzień</a>
            </div>
          </CopyrightFooter>
        </footer>
      </FooterContainer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  background-color: #1e2a20;
`

const FooterContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
`

const CopyrightFooter = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  grid-column-start: 1;
  grid-column-end: 4;
  justify-content: space-between;

  a {
    color: #f78253;
    transition: color 0.3s linear;
  }

  a:hover {
    color: #ff9f3d;
  }
`

export default Footer
