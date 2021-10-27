import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section id="services" className="services">
          <div className="flex-wrap mb-5">
            <h2 className="services-title">usługi</h2>
            <div className="container-col">
              <article className="services-article">
                <h3 className="services-subtitle">Informacje ogólne</h3>
                <p className="services-description">
                  Nasza firma oferuje wynajem różnej wielkości pojazdów (busów,
                  autokarów). Przedstawiamy je Państwu w galerii zdjęć.
                  Prowadzimy wycieczki w dowolne miejsce w Polsce i w Europie
                  (wycieczki szkolne, pielgrzymki, wyjazdy integracyjne, przewóz
                  gości weselnych, przewóz pracowników itp.). Posiadamy wysokiej
                  klasy samochody, które czynią podróż bezpieczną i komfortową.
                  W ofercie wynajmu mamy także 9 osobowe samochody. Prosimy o
                  przesłanie do nas zapytania ofertowego lub kontakt
                  telefoniczny - 602 128 068
                  <a href="#">Wyślij formularz kontaktowy</a>
                </p>
              </article>
              <article className="services-article mt-5">
                <h3 className="services-subtitle">Zakres usług obejmuje</h3>
                <p className="services-description">
                  usługi transportowe wynajem autobusów obsługa linii
                  autobusowych wycieczki krajowe i zagraniczne przewozy
                  pracownicze dowóz dzieci z i do szkół transport na lotnisko
                </p>
              </article>
            </div>
            <div className="container-col">
              <article className="services-article">
                <h3 className="services-subtitle">Transport lokalny</h3>
                <p className="services-description">
                  Oprócz wynajmu autobusów na wycieczki i przejazdy okazjonalne
                  obsługujemy regularne linie autobusowe.Codziennie dokonujemy
                  wszelkich starań aby pasażerom zapewnić bezpieczeństwo i jak
                  najlepszy komfort podróżowania naszymi autobusami. Nasza firma
                  dysponuje nowoczesnymi, bezpiecznymi i wygodnymi autobusami
                  różnego typu. Od małych dziewięcio i dwudziesto kilku
                  osobowych busów do dużych ponad pięćdziesięcio osobowych
                  autokarów turystycznych. Organizujemy m.in. przewozy dzieci i
                  młodzieży na wycieczki, przewozy pracownicze, przewozy
                  okazjonalne (na bankiety, konferencje, wesela i pogrzeby),
                  wycieczki krajowe. Do każdego Klienta i do każdego zlecenia
                  podchodzimy indywidualnie. Wszelkie zapytania i uwagi prosimy
                  przekazywać formą elektroniczną (e-mailem lub wiadomością na
                  Facebook'u) lub telefonicznie.
                </p>
                <p className="services-description-big">
                  Zapewniamy regularny sprawny transport mieszkańcom Mszczonowa,
                  Radziejowic, Żabiej Woli, Żyrardowa, Nadarzyna i Raszyna.
                </p>
                <StaticImage
                  src="../assets/img/bus-zielony-2@2x.jpg"
                  alt="zdjęcia autobusów wycieczkowych"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              </article>
            </div>
          </div>
          <div className="container mb-5">
            <article className="services-article">
              <h3 className="services-subtitle">Nasza flota samochodowa</h3>
              <div className="services-cards">
                <div className="services-card"></div>
                <div className="services-card"></div>
                <div className="services-card"></div>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Services
