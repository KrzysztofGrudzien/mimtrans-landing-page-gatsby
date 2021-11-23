import React, { useState } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle"

const Testimonials = () => {
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(true)
  const [srcModalWindow, setSrcModalWindow] = useState("")

  const handleLoadSrcModalWindow = e => {
    setSrcModalWindow(e.target.id)
  }

  const handleOpenModalWindow = () => {
    setIsOpenModalWindow(!isOpenModalWindow)
  }

  return (
    <>
      <Layout>
        <Hero type="testimonials" />
        <div style={isOpenModalWindow ? { display: "none" } : null}>
          <ModalWindow>
            <AiFillCloseCircle
              size={25}
              className="home-icon-close"
              onClick={handleOpenModalWindow}
              fill="white"
            />
            <ModalWindowContent>
              {srcModalWindow === "referencja-3" ? (
                <StaticImage
                  src="../assets/img/referencja-3.jpg"
                  alt="zdjęcie referencji klienta"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              ) : srcModalWindow === "referencja-4" ? (
                <StaticImage
                  src="../assets/img/referencja-4.jpg"
                  alt="zdjęcie referencji klienta"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              ) : (
                <StaticImage
                  src="../assets/img/referencja-1.jpg"
                  alt="zdjęcie referencji klienta"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              )}
            </ModalWindowContent>
          </ModalWindow>
        </div>
        <section className="testimonials" id="testimonials">
          <div className="container mt-3">
            <h2 className="testimonials-title">rekomendacje</h2>
            <h3 className="testimonials-subtitle">Co mówią o nas ludzie?</h3>
            <div className="testimonials-cards">
              <article className="testimonials-card">
                <h4 className="testimonials-card-title">
                  Szkoła Podstawowa im. Kawalerów Orderu Uśmiechu w Józefinie
                </h4>
                <p className="testimonials-card-description">
                  Dyrektor, Grono Pedagogiczne oraz Uczniowie Szkoła Podstawowa
                  im. Kawalerów Orderu Uśmiechu w Józefinie serdecznie dziękują
                  panu Jerzemu Wiśniewskiemu
                </p>
                <span className="testimonials-card-name">
                  Marzena Pytlak - dyrektor szkoły
                </span>
                <div
                  className="testimonials-card-img-wrapper"
                  onClick={handleOpenModalWindow}
                >
                  <StaticImage
                    src="../assets/img/referencja-3.jpg"
                    alt="zdjęcie referencji klienta"
                    layout="constrained"
                    placeholder="tracedSVG"
                    id="referencja-3"
                    onClick={handleLoadSrcModalWindow}
                  />
                </div>
              </article>
              <article className="testimonials-card">
                <h4 className="testimonials-card-title">
                  Zespół FRESH z UKS "Olimpijczyk 2008
                </h4>
                <p className="testimonials-card-description">
                  Dziękuje przyjaciołom zespołu za wsparcie w wyjeździe na XVI
                  MPCh 2013
                </p>
                <span className="testimonials-card-name">
                  Zespół FRESH z UKS "Olimpijczyk 2008
                </span>
                <div
                  className="testimonials-card-img-wrapper"
                  onClick={handleOpenModalWindow}
                >
                  <StaticImage
                    src="../assets/img/referencja-4.jpg"
                    alt="zdjęcie referencji klienta"
                    layout="constrained"
                    placeholder="tracedSVG"
                    id="referencja-4"
                    onClick={handleLoadSrcModalWindow}
                  />
                </div>
              </article>
              <article className="testimonials-card">
                <h4 className="testimonials-card-title">
                  Dom Pracy Twórczej w Radziejowice
                </h4>
                <p className="testimonials-card-description">
                  Proszę przyjąć moje serdeczne podziękowania za dotychczasową
                  współpracę. Chciałbym pogratulować Panu świadczenia usług
                  transportowych na najwyższym poziomie. Pana oraz Pańscy
                  Współpracownicy dali się poznać jako zgrany i profesjonalny
                  zespół. Pana zaangażowanie, życzliwość, elastyczność,
                  sprawiają, że zdobywamy uznanie w oczach naszych gości. To
                  również dzięki Pana firmie Pałac w Radziejowicach postrzegany
                  jest jako miejsce z obsługą najwyższej jakości. Licząc na
                  kolejne lata tak owocnej współpracy, przesyłam wyrazy
                  szacunku.
                </p>
                <span className="testimonials-card-name">
                  Bogumił Mrówczyński - dyrektor
                </span>
                <div
                  className="testimonials-card-img-wrapper"
                  onClick={handleOpenModalWindow}
                >
                  <StaticImage
                    src="../assets/img/referencja-1.jpg"
                    alt="zdjęcie referencji klienta"
                    layout="constrained"
                    placeholder="tracedSVG"
                    id="referencja-1"
                    onClick={handleLoadSrcModalWindow}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

const ModalWindowContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`

const ModalWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 50%;
  height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`

export default Testimonials
