import React, {useState} from 'react'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar w-nav" role="banner">
      <a href="/" className="logo-link-wrapper w-nav-brand">
        <img
          src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6703898cb9ed6a04ab83c37b_panorama_photosphere.svg"
          alt="logo"
          className="logo"
        />
      </a>
      <div className="nav-container w-container">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div className="nav-link-wrapper">
            <a href="/" className="nav-link w-nav-link w--current">Home</a>
          </div>
          <div className="nav-link-wrapper">
            <a href="/about" className="nav-link w-nav-link">About</a>
          </div>
          <div className="nav-link-wrapper">
            <a href="/contact" className="nav-link w-nav-link">Contact</a>
          </div>
        </nav>
        <div className="hide-on-mobile">
          <a href="/about" className="button-with-circle-icon w-inline-block">
            <div className="button-flex">
              <p className="button-text">Register Now</p>
              <p className="button-text-absolute">Register Now</p>
            </div>
            <div className="button-arrow-wrapper">
              <img
                alt=""
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6af8_arrow_outward.svg"
                className="button-icon"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="menu-button w-nav-button" onClick={()=> setIsOpen(!isOpen)}>
        <div className="burger-icon invert w-icon-nav-menu"></div>
      </div>
    </nav>
  )
}
