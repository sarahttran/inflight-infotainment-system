window.MovieDetailsPage = function MovieDetailsPage({
  setPage,
  movie,
  addFavorite
}) {

  if (!movie) {
    return (
      <PageShell title="Movie Details" setPage={setPage}>
        <h2>No movie selected.</h2>

        <div className="button-row" style={{ marginTop: "20px" }}>
          <button
            className="primary-button"
            onClick={() => setPage("movie-catalog")}
          >
            ← Return to Movie Catalog
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title={movie.title} setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("movie-catalog")}
        >
          ← Back
        </button>
      </div>

      <div className="details-card">

        <img
          src={movie.poster}
          alt={movie.title}
          style={{
            width: "250px",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        <h2>{movie.title} ({movie.year})</h2>

        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>

        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>

        <p>
          <strong>Duration:</strong> {movie.runtime}
        </p>

        <p>
          <strong>Cast:</strong><br />

          {movie.cast.map(actor => (
            <React.Fragment key={actor}>
              {actor}
              <br />
            </React.Fragment>
          ))}
        </p>

        <p>
          <strong>Synopsis:</strong><br />
          {movie.description}
        </p>

        <div className="button-row">

          <button
            className="primary-button"
            onClick={() => alert("Playing " + movie.title + "...")}
          >
            ▶ Play
          </button>

          <button
            onClick={() => {
              addFavorite(movie);
              alert(movie.title + " added to Favorites!");
            }}
          >
            ❤ Add to Favorites
          </button>

        </div>

      </div>

    </PageShell>
  );
};