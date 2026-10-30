import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Coffee, Heart, Leaf, MapPin, Menu, X } from 'lucide-react'
import { sampleCoffees } from './coffeeMenu.js'
import './App.css'
import './HomePage.css'

const facebookPage = 'https://www.facebook.com/p/Kamp-Kape-61586464774620/'
const googleMapsLocation = 'https://www.google.com/maps/search/?api=1&query=Kamp+Kape%2C+Santander'

const highlights = [
  { icon: Coffee, title: 'Good coffee', detail: 'Find a cup for the moment.' },
  { icon: Leaf, title: 'Take a pause', detail: 'A little room to slow down.' },
  { icon: Heart, title: 'Easy company', detail: 'Good things are better shared.' },
  { icon: MapPin, title: 'Santander', detail: 'A coffee stop close to home.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="home-header">
        <a className="wordmark home-brand" href="#home" onClick={closeMenu} aria-label="Kamp Kape home">
          <span className="wordmark__icon"><Coffee size={19} strokeWidth={1.8} /></span>
          <span>Kamp <i>Kape</i></span>
        </a>

        <button
          className="home-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`home-nav${menuOpen ? ' home-nav--open' : ''}`} aria-label="Main navigation">
          <a className="home-nav__active" href="#home" onClick={closeMenu}>Home</a>
          <a href="/menu.html" onClick={closeMenu}>Menu</a>
          <a href="#story" onClick={closeMenu}>About</a>
          <a href="#visit" onClick={closeMenu}>Contact</a>
          <a className="home-nav__social" href={facebookPage} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Facebook <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="home-hero" id="home" aria-labelledby="hero-title">
          <img
            className="home-hero__image"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2200&q=88"
            alt="Coffee cups gathered on a wooden café table"
          />
          <div className="home-hero__shade" />
          <div className="home-hero__content">
            <p className="home-eyebrow"><span /> Coffee in Santander</p>
            <h1 id="hero-title">Good Coffee<br /><em>Better Days</em></h1>
            <p className="home-hero__copy">A good cup, a little breathing room, and a reason to slow down.</p>
            <div className="home-hero__actions">
              <a className="home-button home-button--coral" href="/menu.html">
                Explore menu <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <p className="home-hero__note">Good things<br />brew here <span>♡</span></p>
        </section>

        <section className="home-highlights" aria-label="Kamp Kape highlights">
          {highlights.map(({ icon: Icon, title, detail }, index) => (
            <article className="home-highlight" key={title}>
              <span className={`home-highlight__icon home-highlight__icon--${index + 1}`}>
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h2>{title}</h2>
              <p>{detail}</p>
            </article>
          ))}
        </section>

        <section className="home-featured" id="featured" aria-labelledby="featured-title">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow home-eyebrow--dark"><span /> Sample menu</p>
              <h2 id="featured-title">A few <em>favorites</em></h2>
            </div>
            <a className="home-text-link" href="/menu.html">View full menu <ArrowRight size={16} /></a>
          </div>
          <div className="home-featured__grid">
            {sampleCoffees.slice(0, 4).map((coffee) => (
              <article className="home-coffee" key={coffee.name}>
                <a className="home-coffee__image" href="/menu.html" aria-label={`View ${coffee.name} in the sample menu`}>
                  <img src={coffee.image} alt={coffee.imageAlt} loading="lazy" />
                  <span><ArrowUpRight size={15} /></span>
                </a>
                <div className="home-coffee__details">
                  <p>{coffee.type}</p>
                  <h3>{coffee.name}</h3>
                  <span>{coffee.description}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="home-featured__disclaimer">Sample coffee ideas. Availability and prices may vary.</p>
        </section>

        <section className="home-story" id="story">
          <div className="home-story__photo-wrap">
            <img
              className="home-story__photo"
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85"
              alt="Coffee shop counter and warm café interior"
              loading="lazy"
            />
            <span className="home-story__badge">Good coffee<br />Good mood <Heart size={14} /></span>
          </div>
          <div className="home-story__content">
            <p className="home-eyebrow home-eyebrow--dark"><span /> Our story</p>
            <h2>More than<br />just <em>coffee.</em></h2>
            <p>Kamp Kape is a coffee stop in Santander for everyday pauses, easy conversation, and a cup worth taking a moment for.</p>
            <div className="home-story__actions">
              <a className="home-button home-button--green" href={googleMapsLocation} target="_blank" rel="noreferrer">
                <MapPin size={16} /> Find us <ArrowUpRight size={15} />
              </a>
              <a className="home-text-link" href={facebookPage} target="_blank" rel="noreferrer">
                Say hello on Facebook <ArrowUpRight size={15} />
              </a>
            </div>
            <ul className="home-story__values">
              <li><Coffee size={19} /><span><b>A cup for the day</b><small>Find a new favorite</small></span></li>
              <li><Leaf size={19} /><span><b>Take it easy</b><small>Make room for a pause</small></span></li>
              <li><Heart size={19} /><span><b>Come together</b><small>Good coffee, good company</small></span></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="home-footer" id="visit">
        <a className="wordmark home-brand" href="#home">
          <span className="wordmark__icon"><Coffee size={18} strokeWidth={1.8} /></span>
          <span>Kamp <i>Kape</i></span>
        </a>
        <nav className="home-footer__nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="/menu.html">Menu</a>
          <a href="#story">About</a>
          <a href="#visit">Contact</a>
        </nav>
        <a className="home-footer__social" href={facebookPage} target="_blank" rel="noreferrer">
          Facebook <ArrowUpRight size={14} />
        </a>
        <div className="home-footer__bottom">
          <span>© {new Date().getFullYear()} Kamp Kape</span>
          <span>Good coffee · Good company · Santander</span>
        </div>
      </footer>
    </>
  )
}

export default App
