import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about-header">
        <span className="about-badge">Our Story • Since 1991</span>
        <h2>Redefining How You Experience Cinema</h2>
        <p>
          What started in 1991 as a humble neighborhood video rental shop has
          evolved into MovFlix—your ultimate destination for movies, series, and
          unforgettable storytelling.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>35+ Years</h3>
          <p>
            Over three decades of curating beloved classics and modern
            blockbusters for film lovers.
          </p>
        </div>

        <div className="about-card">
          <h3>Curated Library</h3>
          <p>
            From golden-era cinema to the latest global releases, handpicked for
            every kind of viewer.
          </p>
        </div>

        <div className="about-card">
          <h3>Seamless Streaming</h3>
          <p>
            Crisp high-definition playback designed for effortless movie nights
            on any screen.
          </p>
        </div>
      </div>
    </section>
  );
}
