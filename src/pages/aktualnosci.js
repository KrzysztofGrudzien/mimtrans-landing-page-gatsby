import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const News = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section id="news" className="news">
          <div className="flex-wrap">
            <h2 className="news-title">aktualności</h2>
            <h3 className="news-subtitle">
              Aktualności dotyczące kursowania linii autobusowych i nie tylko.
            </h3>
          </div>
          <ul className="news-list">
            <li className="news-item">
              <b>17.09.2021</b>
              <span>
                Kontakt mailowy po przez stronę mimtrans.pl został uruchomiony.
              </span>
            </li>
            <li className="news-item">
              <b>14.09.2021</b>
              <span>
                W związku z pracami nad nową stroną mimtrans.pl przez pewien
                czas mogą wystepować pewne utrudnienia związane z niektórymi
                funkcjonalnościami strony. np: problem z wysyłaniem maila po
                przez strone mimtrans.pl, animacjami, brak możliwości
                powiększania zdjęć, nie działający slider czy stylami na
                niektórych urządzeniach mobilnych. Wszystkie powyżej wymienione
                problemy będą usuwane z dnia na dzień. Prosimy o wyrozumiałość i
                cierpliowość. Rozkłady jazdy i taryfy biletowe są do pobrania po
                przez kliknięcie we właściwą ikonkę PDF. Na chwilę obecną
                kontakt mailowy jest możliwy po przez kliknięcie na link w
                prawym górnym rogu lub skopiowaniu (mimtrans@o2.pl) i użycie
                innego serwisu obsługującego pocztę e-mail typu: poczta.wp.pl,
                poczta.tlen.pl, gmail itp. W razie pytań proszę dzwonić pod
                numer 602 516 919.
              </span>
            </li>
            <li className="news-item">
              <b>7.04.2021</b>
              <span>
                Linie autobusowe, pomimo epidemii kursują bez zmian, zgodnie z
                rozkładem jazdy dostępnym poniżej na naszej stronie
                internetowej.
              </span>
            </li>
            <li className="news-item">
              <b>28.03.2021</b>
              <span>
                W związku ze zwiększoną liczbą zachorowań na Covid-19 od 29
                marca 2021 r. do odwołania nie funkcjonuje stacjonarny punkt
                sprzedaży biletów miesięcznych w Żabiej Woli przy ul.
                Spółdzielczej. Bilety miesięczne można nabyć kontaktując się pod
                numer telefonu: 602 128 068.
              </span>
            </li>
            <li className="news-item">
              <b>15.02.2021</b>
              <span>
                Od 1 marca 2021 r. obowiązuje nowy rozkład jazdy i trasa linii
                Adamów - Radziejowice - Żyrardów. Rozkład jazdy dostępny jest do
                pobrania poniżej. Zachęcamy do korzystania z obsługiwanych przez
                nas połączeń autobusowych.
              </span>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  )
}

export default News
