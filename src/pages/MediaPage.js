window.MediaPage = function MediaPage({ setPage }) {
  return (
    <PageShell title="Media & Content" setPage={setPage}>
      <section className="home-grid">
        <button
          className="feature-card"
          onClick={() => setPage("movie-details")}
        >
          <span>🎬</span>
          Movies
        </button>

        <button className="feature-card">
          <span>📺</span>
          TV Shows
        </button>

        <button className="feature-card">
          <span>🎵</span>
          Music
        </button>

        <button className="feature-card">
          <span>🔥</span>
          Trending
        </button>

        <button className="feature-card">
          <span>⭐</span>
          Recommended
        </button>

        <button
          className="feature-card"
          onClick={() => setPage("destination")}
        >
          <span>📍</span>
          Destination Attractions
        </button>
      </section>
    </PageShell>
  );
};