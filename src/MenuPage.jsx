import { ArrowLeft, ArrowUpRight, MapPin } from 'lucide-react'
import { sampleCoffees } from './coffeeMenu.js'
import './App.css'
import './MenuPage.css'

const facebookPage = 'https://www.facebook.com/p/Kamp-Kape-61586464774620/'
const googleMapsLocation = 'https://www.google.com/maps/search/?api=1&query=Kamp+Kape%2C+Santander'

function MenuPage() {
  return (
    <>
      <header className="menu-page-header">
        <a className="wordmark" href="/" aria-label="Kamp Kape home">
          <span className="wordmark__icon" aria-hidden="true">K</span>
          <span>Kamp <i>Kape</i></span>
        </a>
        <a className="menu-page-header__back" href="/">
          <ArrowLeft size={16} /> Back to Kamp Kape
        </a>
      </header>

      <main className="menu-page">
        <section className="menu-page__intro" aria-labelledby="menu-title">
          <p className="eyebrow">Kamp Kape · Santander</p>
          <h1 id="menu-title">A good cup for<br /><em>every kind of day.</em></h1>
          <p>Browse a few coffee-house favorites. These are sample menu ideas; check with Kamp Kape for current drinks and prices.</p>
        </section>

        <section className="menu-page__grid" aria-label="Sample coffee menu">
          {sampleCoffees.map((coffee, index) => (
            <article className="menu-card" key={coffee.name}>
              <div className="menu-card__image-wrap">
                <img
                  src={coffee.image}
                  alt={coffee.imageAlt}
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
                <span className="menu-card__number">0{index + 1}</span>
              </div>
              <div className="menu-card__body">
                <p className="menu-card__type">{coffee.type}</p>
                <h2>{coffee.name}</h2>
                <p className="menu-card__description">{coffee.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="menu-page__note">
          <div>
            <p className="eyebrow">A note from the café</p>
            <p>This is an example menu, not a confirmed list of Kamp Kape offerings. Ask about today’s selection and prices before ordering.</p>
          </div>
          <div className="menu-page__actions">
            <a className="button button--green" href={googleMapsLocation} target="_blank" rel="noreferrer">
              <MapPin size={17} /> Find us <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href={facebookPage} target="_blank" rel="noreferrer">
              Message on Facebook <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="menu-page-footer">
        <a className="wordmark" href="/">
          <span className="wordmark__icon" aria-hidden="true">K</span>
          <span>Kamp <i>Kape</i></span>
        </a>
        <span>Slow down. Sip something good.</span>
        <a href={facebookPage} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={15} /></a>
      </footer>
    </>
  )
}

export default MenuPage