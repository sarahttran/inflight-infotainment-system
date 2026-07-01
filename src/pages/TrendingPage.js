window.TrendingPage = function TrendingPage({
  setPage,
  movies,
  shows,
  setSelectedMovie,
  setSelectedShow
}) {

  return (

    <PageShell title="Trending" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      <h2>🔥 Trending Movies</h2>

      <div className="movie-row">

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

      <div style={{ height: "35px" }} />

      <h2>📺 Trending TV Shows</h2>

      <div className="movie-row">

        {shows.map(show => (

          <div
            key={show.id}
            className="movie-poster"
            onClick={() => {

              setSelectedShow(show);

              setPage("tv-details");

            }}
          >

            <img
              src={show.poster}
              alt={show.title}
            />

            <p>{show.title}</p>

          </div>

        ))}

      </div>

    </PageShell>

  );

};