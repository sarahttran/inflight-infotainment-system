window.MovieCatalogPage = function MovieCatalogPage({
  setPage,
  movies,
  setSelectedMovie
}) {

  return (
    <PageShell title="Movie Catalog" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("media")}>
          ← Back
        </button>
      </div>

      <div className="movie-row">

        <div
          className="movie-poster"
          onClick={() => setPage("favorite-movies")}
        >
          <div className="favorite-poster">
            ⭐
          </div>

          <p>Favorites</p>

        </div>

        {movies.map(movie => (

          <div
            key={movie.id}
            className="movie-poster"
            onClick={() => {

              setSelectedMovie(movie);

              setPage("movie-details");

            }}
          >

            <img
              src={movie.poster}
              alt={movie.title}
            />

            <p>{movie.title}</p>

          </div>

        ))}

      </div>

    </PageShell>
  );
};