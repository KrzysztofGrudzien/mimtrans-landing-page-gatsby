import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <>
      <Layout>
        <section className="home flex-wrap" id="home">
          <div className="home-wrapper">
            <h2 className="home-title">
              MIM<span className="home-title-green">TRANS</span>
            </h2>
            <p className="home-description">
              Nasza firma oferuje wynajem różnej wielkości pojazdów (busów,
              autokarów). Przedstawiamy je Państwu w galerii zdjęć. Prowadzimy
              wycieczki w dowolne miejsce w Polsce i w Europie (wycieczki
              szkolne, pielgrzymki, wyjazdy integracyjne, przewóz gości
              weselnych, przewóz pracowników itp.) <br />
              <br />
              Zapewniamy regularny sprawny transport mieszkańcom Mszczonowa,
              Radziejowic, Żabiej Woli, Żyrardowa, Nadarzyna i Raszyna.
            </p>
          </div>
          <div className="home-image-wrapper">
            <StaticImage
              src="../assets/img/bus-zielony-2@2x.jpg"
              alt="zdjęcie mapy okolic"
              layout="fullWidth"
              placeholder="tracedSVG"
            />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
