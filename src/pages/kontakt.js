import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const Contact = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section className="contact flex-wrap" id="contact">
          <h2 className="contact-title">kontakt</h2>
          <div className="container-col mb-5">
            <h3 className="contact-subtitle">
              Nie wahaj skontaktować się z nami.
            </h3>
            <p className="contact-text">
              Jeśli chcesz się z nami skontaktować, zadać nam pytanie w sprawie
              wynajmu pojazdu lub zgłosić jakieś zastrzeżenia czy uwagi do
              realizowanych przewozów, skorzystaj z poniższego formularza i
              wyślij wiadomość. Odpowiemy jak najszybciej.
            </p>
            <div className="form-wrapper">
              <form action="" className="form flex">
                <div className="form-group">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    placeholder="Twoje imię"
                    className="form-input"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""></label>
                  <input
                    type="email"
                    placeholder="Adres E-mail"
                    className="form-input"
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    placeholder="Temat"
                    className="form-input"
                    name="subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor=""></label>
                  <textarea
                    placeholder="Treść wiadomości"
                    className="form-textarea"
                    required
                    name="message"
                  ></textarea>
                </div>
                <button type="submit" className="form-btn">
                  wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
          <div className="container-col">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Nowa%20Buk%C3%B3wka,%20ul.%20Rumiankowa%2041%2096-321%20%C5%BBabia%20Wola&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="google map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact
