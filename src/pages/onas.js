import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <>
      <Layout>
        <section id="about" className="about">
          <h2 className="about-title">o nas</h2>
          <h3 className="about-subtitle">Nasza krótka historia</h3>
          <p className="about-description">
            Jesteśmy firmą z doświadczeniem - działamy w branży od 1992 roku.
            Przez ten czas zdążyliśmy przetrzeć szlaki, które pozwoliły nam na
            wyznaczenie wysokich standardów oferowanych usług. Specjalizujemy
            się w przewozach pasażerskich i transporcie drogowym.
            <br />
            <br />
            Nasze doświadczenie procentuje - zaufały nam powszechnie szanowane
            firmy różnych branż. Nasza firma jest gwarantem wysokiej jakości
            świadczonych usług. Posiadamy wszystkie wymagane licencje i
            certyfikaty. Nie spoczywamy jednak na laurach. Ciągle staramy się
            czynić nasze usługi doskonalszymi tak, aby zadowolić każdego naszego
            klienta.Nasza wieloletnia praca została doceniona przez Samorządy.
            <br />
            <br />W 2020 roku staliśmy się operatorem transportu publicznego
            organizowanego przez 3 różne Jednostki: Powiat Grodziski, Powiat
            Żyrardowski i Gminę Żabia Wola. W 2021 roku kontynuujemy obsługę
            linii autobusowych użyteczności publicznej dla dwóch Organizatorów.
            Pasażerowie mają zapewnioną bardzo dobrą ofertę komunikacyjną i
            wysoki komfort podróży.
          </p>
        </section>
      </Layout>
    </>
  )
}

export default About
