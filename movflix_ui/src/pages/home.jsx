import React from "react";
import Movies_carousal from "./movies_carousal";
import Counter from "./counter";
import Parent from "../hooks/parent";

export default function Home(){
  return(
    <>
      <Hero />
      <Movies_carousal />
      <Counter />
      <Parent />
    </>
  )
}

function Hero() {
  return (
    <section className="home">
      <div className="home-content">
        <span className="home-badge">Unlimited Streaming</span>
        <h1>MovFlix</h1>
        <p>
          Stream your favorite blockbusters, trending series, and timeless
          classics anytime, anywhere.
        </p>
        <div className="home-actions">
          <button className="btn-primary">Watch Now</button>
          <button className="btn-secondary">Browse Library</button>
        </div>
      </div>

      <div className="home-image-wrapper">
        <img
          src="movie_time.webp"
          alt="MovFlix movie night banner"
          className="home-image"
        />
      </div>
    </section>
  );
}
