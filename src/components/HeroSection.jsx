import React from 'react'
import SpacemanScene from './SpacemanScene'

export default function HeroSection(){
  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <SpacemanScene className="spline" />
      <div className="w-layout-blockcontainer container padding-9rem w-container">
        <div className="hero-wrapper">
          <div className="hero-space-top"></div>
          <div className="hero-subheading-flex">
            <img
              alt="fingerprint"
              src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67024792d09f3730c4f72330_fingerprint.svg"
              className="icon-small"
            />
            <h5>Welcome to MECHGUST'26</h5>
          </div>
          <h1 className="hero-text">The silver era</h1>
          <p className="max-width-25vw self-align-right text-align-right">Forging the Future in Silver.</p>
          <a href="#learn-more" className="arrow-border-wrapper w-inline-block">
            <div className="icon-wrapper-small">
              <img
                alt="icon"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670242c3a96327a0b710be85_Icon.svg"
                className="button-icon"
              />
            </div>
          </a>
          <div className="hero-flex">
            <div className="hero-cards-wrapper">
              <div className="hero-card">
                <div className="avatars-flex">
                  <div className="avatar-a">
                    <img
                      alt=""
                      src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea69fc_Team3.jpg"
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-b">
                    <img
                      alt=""
                      src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg"
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-c">
                    <img
                      alt=""
                      src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3e_Team1.jpg"
                      className="avatar-image"
                    />
                  </div>
                </div>
                <h5>1.7k+ Clients</h5>
              </div>
            </div>
            <div className="hero-cards-wrapper">
              <div className="hero-card">
                <div className="hero-text-flex">
                  <h4 className="hero-card-title">3K</h4>
                  <h5>Works</h5>
                  <img
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670239a571ef993ea919efd4_Arrow.svg"
                    alt="arrow"
                    className="hero-icon"
                  />
                </div>
                <div className="hero-card-image">
                  <img
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670229a75f4844ac9d8daa0a_Services-p-500.jpg"
                    alt="gadgets on a white table"
                    className="hero-card-image-back"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67038dd51127140791a4bc7c_PosterMockup-p-500.jpg"
                    alt="poster mock up"
                    className="hero-card-image-front"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}
