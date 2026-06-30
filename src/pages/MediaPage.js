window.MediaPage = function MediaPage({ setPage, profile }) {
  const favoriteGenre =
    profile && profile.preferences && profile.preferences.genre
      ? profile.preferences.genre
      : "";

  return (
    <PageShell title="Media & Content" setPage={setPage} backTo="home">
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

        <button
          className="feature-card"
          onClick={() => setPage("recommended")}
        >
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

      <div className="placeholder-box" style={{ marginTop: "24px" }}>
        <h2>Your Saved Preference</h2>

        {favoriteGenre ? (
          <p>
            Favorite Genre: <strong>{favoriteGenre}</strong>
          </p>
        ) : (
          <p>
            No favorite genre selected yet. Go to Profile/Settings to choose one.
          </p>
        )}

        <p>
          Click Recommended to see suggestions based on your saved preference.
        </p>
      </div>
    </PageShell>
  );
};