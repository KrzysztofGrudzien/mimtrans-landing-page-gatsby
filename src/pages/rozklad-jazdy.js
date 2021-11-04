import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import iconPdf from "../assets/img/pdf.svg"

const Timetable = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section className="timetable" id="timetable">
          <div className="container mt-3">
            <h2 className="timetable-title">rozkład jazdy</h2>
            <h3 className="timetable-subtitle">
              Rozkład jazdy linii autobusowych
            </h3>
            <div className="timetable-cards">
              <div className="timetable-card">
                <div className="timetable-card-header timetable-card-header-primary">
                  M
                </div>
                <ul className="timetable-list">
                  <li className="timetable-item">Mszczonów Rynek</li>
                  <li className="timetable-item">Radziejowice</li>
                  <li className="timetable-item">Krze</li>
                  <li className="timetable-item">Żabia Wola</li>
                  <li className="timetable-item">Siestrzeń</li>
                  <li className="timetable-item">Nadarzyn</li>
                  <li className="timetable-item">Janki</li>
                  <li className="timetable-item">Raszyn</li>
                  <li className="timetable-item">Warszawa P+R Al. Krakowska</li>
                </ul>
                <div className="timetable-card-download">
                  <a
                    href="https://drive.google.com/file/d/1PUDBSpbnv6LbJ30ezW0DGcrGGIwEflVT/view?usp=sharing"
                    className="timetable-link"
                    target="_blank"
                  >
                    <img
                      src={iconPdf}
                      alt="ikonka dokumentu pdf"
                      className="timetable-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="timetable-card">
                <div className="timetable-card-header timetable-card-header-secondary">
                  S
                </div>
                <ul className="timetable-list">
                  <li className="timetable-item">Piotrkowice</li>
                  <li className="timetable-item">Bartoszówka</li>
                  <li className="timetable-item">Skuły</li>
                  <li className="timetable-item">Ciepłe</li>
                  <li className="timetable-item">Kaleń</li>
                  <li className="timetable-item">Zaręby</li>
                  <li className="timetable-item">Ojchrzanów</li>
                  <li className="timetable-item">Żelechów</li>
                  <li className="timetable-item">
                    Siestrzeń z przesiadką do/z Warszawy
                  </li>
                </ul>
                <div className="timetable-card-download">
                  <a
                    href="https://drive.google.com/file/d/1z3aWLq3rwGvszMeWOw2ngVoFss6P0ziZ/view?usp=sharing"
                    className="timetable-link"
                    target="_blank"
                  >
                    <img
                      src={iconPdf}
                      alt="ikonka dokumentu pdf"
                      className="timetable-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="timetable-card">
                <div className="timetable-card-header timetable-card-header-tertiary">
                  A
                </div>
                <ul className="timetable-list">
                  <li className="timetable-item">Adamów Parcel</li>
                  <li className="timetable-item">Parcela</li>
                  <li className="timetable-item">Krze</li>
                  <li className="timetable-item">Radziejowice</li>
                  <li className="timetable-item">Korytów</li>
                  <li className="timetable-item">Żyrardów Dw. PKP</li>
                </ul>
                <div className="timetable-card-download">
                  <a
                    href="https://drive.google.com/file/d/1exRA4d5wDwNGQsqY5syUqbrVZxIPTKvi/view?usp=sharing"
                    className="timetable-link"
                    target="_blank"
                  >
                    <img
                      src={iconPdf}
                      alt="ikonka dokumentu pdf"
                      className="timetable-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Timetable
