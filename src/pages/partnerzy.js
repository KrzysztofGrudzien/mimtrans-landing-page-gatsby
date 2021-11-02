import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"

const Partners = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section id="partners" className="partners">
          <div className="container mb-5 mt-3">
            <h2 className="partners-title">partnerzy</h2>
            <h3 className="partners-subtitle">Kto z nami współpracuje?</h3>
            <div className="partners-cards">
              <div className="partners-card">
                <StaticImage
                  src="../assets/img/dom-pracy-tworczej@2x.jpg"
                  alt="dom pracy twórczej w Radziejowicach"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
                <p className="partners-card-description">
                  Dom Pracy Twórczej w Radziejowicach dysponuje 85 miejscami w
                  pokojach 1, 2, 3-osobowych w standardzie trzygwiazdkowym.
                  Apartamenty oraz pokoje noclegowe rozmieszczone są w kilku
                  budynkach wchodzących w skład radziejowickiego zespołu
                  pałacowo-parkowego. Każdy z naszych pokojów wyposażony jest w
                  łazienkę, dostęp do bezprzewodowego Internetu, czajnik oraz
                  TV.
                </p>
                <a
                  href="http://palacradziejowice.pl/"
                  className="partners-card-link"
                  target="_blank"
                >
                  Dom Pracy Twórczej w Radziejowicach
                </a>
              </div>
              <div className="partners-card">
                <StaticImage
                  src="../assets/img/hotel-artis@2x.jpg"
                  alt="hotel artis loft w Radziejowicach"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
                <p className="partners-card-description">
                  Artis Loft Hotel to nowoczesny obiekt trzygwiazdkowy
                  zlokalizowany 40 km od centrum Warszawy. Hotel położony jest
                  tuż przy drodze ekspresowej S8, w pobliżu autostrady A2.
                  Zaledwie kilkanaście minut drogi dzieli nas od terenów
                  targowych Ptak Warsaw Expo w Nadarzynie.
                </p>
                <a
                  href="http://www.artis-loft.pl/"
                  className="partners-card-link"
                  target="_blank"
                >
                  Hotel Artis-Loft w Radziejowicach
                </a>
              </div>
              <div className="partners-card">
                <StaticImage
                  src="../assets/img/hotel-panorama@2x.jpg"
                  alt="hotel panorama w Mszczonowie"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
                <p className="partners-card-description">
                  PANORAMA w Mszczonowie, to wyjątkowy Hotel dla firm. Idealny
                  na noclegi pod Warszawą, konferencje w pobliżu stolicy, czy
                  też na imprezy integracyjne w najlepszym obiekcie na Mazowszu.
                  Hotel Panorama to więcej niż sale konferencyjne i miejsce na
                  piknik firmowy lub imprezy integracyjne. To także przestrzeń
                  na wesela, chrzciny, komunie oraz noclegi w Mszczonowie.
                </p>
                <a
                  href="http://www.hotelpanorama.pl/"
                  className="partners-card-link"
                  target="_blank"
                >
                  Hotel Panorama w Mszczonowie
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Partners
