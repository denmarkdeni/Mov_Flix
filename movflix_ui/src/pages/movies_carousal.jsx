import React, { useRef, useEffect, useState } from "react";

const topMovies = [
  {
    id: 1,
    rank: "#1",
    title: "Leo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOMP_CsPQeyfbYdAgYTCOlKCnKQiUo1EKbVi9Crufow&s=10",
  },
  {
    id: 2,
    rank: "#2",
    title: "Vikram",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxS9RSMjAf7E7UFcL6cPowEiyoI2RXXuXKO875lkeSg&s=10",
  },
  {
    id: 3,
    rank: "#3",
    title: "Jailer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE17BS9Hb8O6QAfqEorgY6FF9HlXiBvZd8laEkGPfWtw&s",
  },
  {
    id: 4,
    rank: "#4",
    title: "Interstellar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAaFoBHE4wG7f_lCVqR_P7U1gVxVySQmSrSY_YtF7BA&s=10",
  },
  {
    id: 5,
    rank: "#5",
    title: "Ponniyin Selvan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZEa0-YJA210BCdO-2ErgcWzBFa77FDa-rtLF-hSzQ&s=10",
  },
  {
    id: 6,
    rank: "#6",
    title: "The Dark Knight",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bATn-IEssk6KBibp0ysyNEJ_3ZOkdrwGdHjcu9jbPA&s=10",
  },
];

export default function Movies_carousal() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollCarousel = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const scrollAmount = 252; // Card width (220px) + gap (32px)

    if (direction === "right") {
      // Check if reached the end; if so, loop back to the start
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollCarousel("right");
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-header">
        <div>
          <span className="carousel-badge">Top Charts</span>
          <h2>Trending Movies</h2>
        </div>

        <div className="carousel-controls">
          <button
            className="nav-btn"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll Left"
          >
            &#8592;
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="carousel-track" ref={trackRef}>
        {topMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="rank-badge">{movie.rank}</div>
            <div className="poster-wrapper">
              <img src={movie.image} alt={movie.title} className="movie-poster" />
            </div>
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
