import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import iconPdf from "../assets/img/pdf.svg"

const TicketPrice = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section className="ticketprice" id="ticketprice">
          <div className="container mt-3">
            <h2 className="ticketprice-title">taryfa biletowa</h2>
            <h3 className="ticketprice-subtitle">Ceny biletów na liniach</h3>
            <div className="ticketprice-cards">
              <div className="ticketprice-card">
                <div className="ticketprice-card-header ticketprice-card-header-primary">
                  M
                </div>
                <ul className="ticketprice-list">
                  <li className="ticketprice-item">Mszczonów Rynek</li>
                  <li className="ticketprice-item">Radziejowice</li>
                  <li className="ticketprice-item">Krze</li>
                  <li className="ticketprice-item">Żabia Wola</li>
                  <li className="ticketprice-item">Siestrzeń</li>
                  <li className="ticketprice-item">Nadarzyn</li>
                  <li className="ticketprice-item">Janki</li>
                  <li className="ticketprice-item">Raszyn</li>
                  <li className="ticketprice-item">
                    Warszawa P+R Al. Krakowska
                  </li>
                </ul>
                <div className="ticketprice-card-download">
                  <a
                    href="https://drive.google.com/file/d/1TOqdoDDc_4aUysinO8Ra1N0y-L74Mrhk/view?usp=sharing"
                    className="ticketprice-link"
                    target="_blank"
                  >
                    <img
                      src={iconPdf}
                      alt="ikonka dokumentu pdf"
                      className="ticketprice-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="ticketprice-card">
                <div className="ticketprice-card-header ticketprice-card-header-secondary">
                  S
                </div>
                <ul className="ticketprice-list">
                  <li className="ticketprice-item">Piotrkowice</li>
                  <li className="ticketprice-item">Bartoszówka</li>
                  <li className="ticketprice-item">Skuły</li>
                  <li className="ticketprice-item">Ciepłe</li>
                  <li className="ticketprice-item">Kaleń</li>
                  <li className="ticketprice-item">Zaręby</li>
                  <li className="ticketprice-item">Ojchrzanów</li>
                  <li className="ticketprice-item">Żelechów</li>
                  <li className="ticketprice-item">
                    Siestrzeń z przesiadką do/z Warszawy
                  </li>
                </ul>
                <div className="ticketprice-card-download">
                  <a
                    href="https://drive.google.com/file/d/1c-8CQ_HW0usce5OdCZJ7sWlb8DWmwWgt/view?usp=sharing"
                    className="ticketprice-link"
                    target="_blank"
                  >
                    <img
                      src={iconPdf}
                      alt="ikonka dokumentu pdf"
                      className="ticketprice-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="ticketprice-card">
                <div className="ticketprice-card-header">info</div>
                <p className="ticketprice-card-info">
                  informacja o sprzedaży biletów miesięcznych na komunikację
                  autobusową na miesiąc czerwiec
                </p>
                <div className="ticketprice-card-download">
                  <a
                    href="https://drive.google.com/file/d/1SXqIbtpnuS4HTnlxCaUBsHEO2E_aseJW/view?usp=sharing"
                    className="ticketprice-link"
                    target="_blank"
                  >
                    <img
                      src={iconPdf}
                      alt="ikonka dokumentu pdf"
                      className="ticketprice-icon"
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

export default TicketPrice
