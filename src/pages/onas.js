import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"
import { RiHealthBookFill } from "@react-icons/all-files/ri/RiHealthBookFill"
import { FaBus } from "@react-icons/all-files/fa/FaBus"
import { FaAward } from "@react-icons/all-files/fa/FaAward"
import { FaUsers } from "@react-icons/all-files/fa/FaUsers"
import styled from "styled-components"

const About = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section id="about" className="about">
          <div className="flex-wrap mb-5">
            <h2 className="about-title">o nas</h2>
            <div className="container-col">
              <h3 className="about-subtitle">Nasza krótka historia</h3>
              <p className="about-description">
                Jesteśmy firmą z doświadczeniem - działamy w branży od 1992
                roku. Przez ten czas zdążyliśmy przetrzeć szlaki, które
                pozwoliły nam na wyznaczenie wysokich standardów oferowanych
                usług. Specjalizujemy się w przewozach pasażerskich i
                transporcie drogowym.
                <br />
                <br />
                Nasze doświadczenie procentuje - zaufały nam powszechnie
                szanowane firmy różnych branż. Nasza firma jest gwarantem
                wysokiej jakości świadczonych usług. Posiadamy wszystkie
                wymagane licencje i certyfikaty. Nie spoczywamy jednak na
                laurach. Ciągle staramy się czynić nasze usługi doskonalszymi
                tak, aby zadowolić każdego naszego klienta.Nasza wieloletnia
                praca została doceniona przez Samorządy.
                <br />
                <br />W 2020 roku staliśmy się operatorem transportu publicznego
                organizowanego przez 3 różne Jednostki: Powiat Grodziski, Powiat
                Żyrardowski i Gminę Żabia Wola. W 2021 roku kontynuujemy obsługę
                linii autobusowych użyteczności publicznej dla dwóch
                Organizatorów. Pasażerowie mają zapewnioną bardzo dobrą ofertę
                komunikacyjną i wysoki komfort podróży.
              </p>
            </div>
            <div className="container-col">
              <StaticImage
                src="../assets/img/buses@2x.jpg"
                alt="zdjęcia autobusów wycieczkowych"
                layout="constrained"
                placeholder="tracedSVG"
              />
            </div>
          </div>
          <div className="container flex-wrap mb-5">
            <div className="container-col">
              <h3 className="about-subtitle">Plany na przyszłość</h3>
              <p className="about-description">
                Cały czas unowocześniamy naszą flotę pojazdów, tak aby spełniała
                oczekiwania coraz bardziej wymagających Klientów. Zakupiliśmy
                nowe autobusy, które już jeżdżą na naszych liniach. Autobusy te
                można także zamawiać do przewozów grup. <br />
                <br /> MiM Trans stawia na młodych ludzi. Dzięki współpracy z
                naszą firmą uczniowie szkół technicznych i studenci nabywają
                cennego doświadczenia, które później umożliwia im osiągnięcie
                sukcesu zawodowego.
              </p>
            </div>
            <div className="container-col">
              <h3 className="about-subtitle">Kto zarządza firmą?</h3>
              <p className="about-description">
                Właścicielami MiM Trans USŁUGI TRANSPORTOWE Jerzy Wiśniewski są
                P. Jerzy Wiśniewski i P. Tadeusz Pałka
              </p>
            </div>
          </div>
          <div className="container flex-wrap mb-5">
            <div className="container-col">
              <h3 className="about-subtitle">Co nas wyróżnia?</h3>
              <p className="about-description">
                Sprawna komunikacja wymaga bardzo dobrych pracowników obsługi
                technicznej. Dzięki naszym mechanikom pojazdy naszej firmy są
                zawsze sprawne, bezpieczne, w pełni gotowe do drogi. Zatrudnieni
                w naszej firmie kierowcy są doskonale wyszkoleni i posiadają
                duże doświadczenie w prowadzeniu pojazdów.
                <br />
                <br />
                Nasza firma dysponuje nowoczesnymi, bezpiecznymi i wygodnymi
                autobusami różnego typu. Od małych dziewięcio i dwudziesto kilku
                osobowych busów do dużych ponad pięćdziesięcio osobowych
                autokarów turystycznych. Organizujemy m.in. przewozy dzieci i
                młodzieży na wycieczki, przewozy pracownicze, przewozy
                okazjonalne (na bankiety, konferencje, wesela i pogrzeby),
                wycieczki krajowe. Do każdego Klienta i do każdego zlecenia
                podchodzimy indywidualnie.
              </p>
            </div>
            <div className="container-col">
              <StaticImage
                src="../assets/img/bus-zielony-2@2x.jpg"
                alt="zdjęcia autobusów wycieczkowych"
                layout="constrained"
                placeholder="tracedSVG"
              />
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <IconWrapper>
                <RiHealthBookFill size="4rem" style={{ fill: "#f1f1f1" }} />
              </IconWrapper>
              <span className="card-title">Doświadczenie i bezpieczeństwo</span>
            </div>
            <div className="card">
              <IconWrapper>
                <FaBus size="4rem" style={{ fill: "#f1f1f1" }} />
              </IconWrapper>
              <span className="card-title">Kompleksowe usługi przewozowe</span>
            </div>
            <div className="card">
              <IconWrapper>
                <FaAward size="4rem" style={{ fill: "#f1f1f1" }} />
              </IconWrapper>
              <span className="card-title">
                Wysoka jakość i konkurencyjne ceny
              </span>
            </div>
            <div className="card">
              <IconWrapper>
                <FaUsers size="4rem" style={{ fill: "#f1f1f1" }} />
              </IconWrapper>
              <span className="card-title">
                indywidualne podejście do klienta i zlecenia
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

const IconWrapper = styled.div`
  align-items: center;
  border: solid 2px #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 120px;
  width: 120px;
`

export default About
