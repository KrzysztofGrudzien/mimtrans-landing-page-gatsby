import React, { useState } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle"

const Home = () => {
  const [isOpenNewsBox, setIsOpenNewsBox] = useState(false)

  const handleNewsBox = () => {
    setIsOpenNewsBox(!isOpenNewsBox)
  }

  return (
    <>
      <Layout>
        <section className="home flex-wrap" id="home">
          <div
            className="home-news"
            style={isOpenNewsBox ? { display: "none" } : null}
          >
            <AiFillCloseCircle
              size={25}
              className="home-icon-close"
              onClick={handleNewsBox}
            />
            15.11.2021 Przedsiębiorca uzyskał subwencję finansową w ramach
            programu rządowego „Tarcza Finansowa 2.0 Polskiego Funduszu Rozwoju
            dla Mikro, Małych i Średnich Firm”, udzieloną przez PFR SA.
          </div>
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
