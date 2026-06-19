import React, { useState } from 'react'
import content from './content.json'
import {
  Phone, MapPin, Mail, Menu as MenuIcon, X, Instagram, Facebook,
  Utensils, Users, Sparkles, Heart, Clock, Award, Star, Calendar,
  MessageCircle, ArrowRight, Quote
} from 'lucide-react'

const ICONS = {
  users: Users, heart: Heart, utensils: Utensils,
  sparkles: Sparkles, award: Award, pin: MapPin,
}

function Nav({ brand, nav }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="brand-name">{brand.name.replace(' Restaurant','')}</span>
          <span className="brand-est">Est. {brand.established}</span>
        </a>
        <nav className="nav-links">
          {nav.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a href="#reserve" className="btn btn-primary nav-cta"><Calendar size={16}/> Reserve</a>
        <button className="nav-burger" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          {open ? <X size={24}/> : <MenuIcon size={24}/>}
        </button>
      </div>
      <div className={`nav-mobile container ${open ? 'open' : ''}`}>
        {nav.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="#reserve" className="btn btn-primary" onClick={() => setOpen(false)}>
          <Calendar size={16}/> Reserve a Table
        </a>
      </div>
    </header>
  )
}

function Kicker({ children, center }) {
  return (
    <span className="kicker">
      <span className="line" />{children}{center && <span className="line" />}
    </span>
  )
}

function SectionTitle({ kicker, title, intro }) {
  return (
    <div className="section-title">
      <Kicker center>{kicker}</Kicker>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

function Hero({ hero, contact }) {
  // title may contain <em>...</em>
  const html = { __html: hero.title }
  return (
    <section className="hero" id="home">
      <div className="hero-bg"><img src={hero.image} alt="Walk in Woods restaurant interior" /></div>
      <div className="hero-content fade-up">
        <Kicker center>{hero.kicker}</Kicker>
        <h1 dangerouslySetInnerHTML={html} />
        <p>{hero.subtitle}</p>
        <div className="hero-ctas">
          <a href="#menu" className="btn btn-accent"><Utensils size={16}/> View Menu</a>
          <a href="#reserve" className="btn btn-light"><Calendar size={16}/> Reserve a Table</a>
          <a href={contact.phoneHref} className="btn btn-ghost"><Phone size={16}/> Call Now</a>
          <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MapPin size={16}/> Get Directions</a>
        </div>
      </div>
    </section>
  )
}

function About({ about }) {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-media">
          <img src={about.image} alt="Walk in Woods private dining hall" loading="lazy" />
          <div className="about-badge">
            <div className="val">{about.badge.value}</div>
            <div className="lab">{about.badge.label}</div>
          </div>
        </div>
        <div className="about-text">
          <Kicker>{about.kicker}</Kicker>
          <h2>{about.title}</h2>
          <p>{about.body}</p>
          <div className="about-stats">
            {about.stats.map(s => (
              <div key={s.label}><div className="val">{s.value}</div><div className="lab">{s.label}</div></div>
            ))}
          </div>
          <a href="#reserve" className="about-link">Book your experience <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  )
}

function Features({ features }) {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <SectionTitle kicker={features.kicker} title={features.title} intro={features.intro} />
        <div className="features-grid">
          {features.items.map(f => {
            const Icon = ICONS[f.icon] || Sparkles
            return (
              <div key={f.title} className="feature">
                <div className="feature-icon"><Icon size={22}/></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Gallery({ gallery }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionTitle kicker={gallery.kicker} title={gallery.title} intro={gallery.intro} />
        <div className="gallery-grid">
          {gallery.items.map((it,i) => (
            <div key={i} className={`gallery-item ${it.tall ? 'tall' : ''}`}>
              <img src={it.src} alt={it.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why({ why }) {
  return (
    <section className="section why" id="menu">
      <div className="container why-grid">
        <div>
          <Kicker>{why.kicker}</Kicker>
          <h2>{why.title}</h2>
          <p className="why-lead">{why.intro}</p>
        </div>
        <div>
          {why.items.map(w => (
            <div key={w.num} className="why-item">
              <div className="num">{w.num}</div>
              <div><h3>{w.title}</h3><p>{w.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials({ testimonials }) {
  return (
    <section className="section bg-secondary-soft">
      <div className="container">
        <SectionTitle kicker={testimonials.kicker} title={testimonials.title} />
        <div className="tg">
          {testimonials.items.map(t => (
            <figure key={t.name} className="testimonial">
              <Quote className="quote" size={28} />
              <blockquote>{t.quote}</blockquote>
              <div className="stars">
                {Array.from({length:5}).map((_,i)=><Star key={i} size={16}/>)}
              </div>
              <figcaption>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reserve({ reserve, contact }) {
  return (
    <section className="reserve" id="reserve">
      <div className="reserve-bg"><img src={reserve.image} alt="" aria-hidden="true" /></div>
      <div className="reserve-inner">
        <Sparkles size={36} style={{color:'var(--accent)'}}/>
        <h2>{reserve.title}</h2>
        <p>{reserve.subtitle}</p>
        <div className="reserve-ctas">
          <a href={contact.phoneHref} className="btn btn-accent"><Calendar size={16}/> Book a Table</a>
          <a href="#contact" className="btn btn-ghost"><MessageCircle size={16}/> Contact Us</a>
        </div>
      </div>
    </section>
  )
}

function Contact({ contact }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle kicker="Visit Us" title="Find Walk in Woods" intro="We'd love to host you. Reach out, drop in, or follow our journey online." />
        <div className="contact-grid">
          <div className="contact-cards">
            <div className="contact-card"><MapPin size={20}/><div><div className="label">Address</div><div className="val">{contact.address}</div></div></div>
            <div className="contact-card"><Phone size={20}/><div><div className="label">Phone</div><a className="val" href={contact.phoneHref}>{contact.phone}</a></div></div>
            <div className="contact-card"><Mail size={20}/><div><div className="label">Email</div><a className="val" href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
            <div className="contact-card"><Clock size={20}/><div><div className="label">Hours</div><div className="val">{contact.hours}</div></div></div>
            <div className="social">
              <div className="social-label">Follow Us</div>
              <div className="social-links">
                <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18}/></a>
                <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18}/></a>
                <a href={contact.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe title="Walk in Woods location map" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ brand, nav, contact }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>{brand.name}</h4>
          <p className="tag">{brand.tagline}</p>
          <p className="blurb">A family fine-dining tradition built on great food, warm service, and memorable moments.</p>
        </div>
        <div>
          <div className="footer-section-title">Quick Links</div>
          <ul>{nav.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
        <div>
          <div className="footer-section-title">Get in Touch</div>
          <div className="footer-ctas">
            <a href={contact.phoneHref} className="btn btn-accent"><Phone size={16}/> Call Now</a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MessageCircle size={16}/> WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
        <div>Dehradun, Uttarakhand · India</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Nav brand={content.brand} nav={content.nav} />
      <main>
        <Hero hero={content.hero} contact={content.contact} />
        <About about={content.about} />
        <Features features={content.features} />
        <Gallery gallery={content.gallery} />
        <Why why={content.why} />
        <Testimonials testimonials={content.testimonials} />
        <Reserve reserve={content.reserve} contact={content.contact} />
        <Contact contact={content.contact} />
      </main>
      <Footer brand={content.brand} nav={content.nav} contact={content.contact} />
    </div>
  )
}
