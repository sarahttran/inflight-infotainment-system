window.FavoriteMoviesPage = function FavoriteMoviesPage({
  setPage,
  favoriteMovies
}) {

  return (
    <PageShell title="Favorites" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("movie-catalog")}>
          ← Back
        </button>
      </div>

      {favoriteMovies.length === 0 ? (

        <div className="placeholder-box">
          <h2>No Favorite Movies Yet</h2>

          <p>
            Browse the movie catalog and tap
            <strong> Add to Favorites </strong>
            to save movies here.
          </p>
        </div>

      ) : (

        <div className="movie-row">

          {favoriteMovies.map(movie => (

            <div
              key={movie.title}
              className="movie-poster"
              onClick={() => setPage("movie-details")}
            >

              <img
                src={movie.poster}
                alt={movie.title}
              />

              <p>{movie.title}</p>

            </div>

          ))}

        </div>

      )}

    </PageShell>
  );
};