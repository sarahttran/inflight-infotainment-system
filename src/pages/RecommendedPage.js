window.RecommendedPage = function RecommendedPage({
  setPage,
  profile,
  movies,
  shows,
  setSelectedMovie,
  setSelectedShow
}) {

  const savedGenre =
  profile && profile.preferences && profile.preferences.genre
    ? profile.preferences.genre
    : "";

  const recommendedMovies =
    movies.filter(movie => movie.genre === savedGenre);

  const recommendedShows =
    shows.filter(show => show.genre === savedGenre);

  return (

    <PageShell title="Recommended" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      {!savedGenre ? (

        <div className="placeholder-box">

          <h2>No Favorite Genre Selected</h2>

          <p>
            Visit your Profile Settings and choose your favorite
            genre to receive personalized recommendations.
          </p>

        </div>

      ) : (

        <div>

          <h2>🎬 Recommended Movies</h2>

          <div className="movie-row">

            {recommendedMovies.map(movie => (

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

          <h2>📺 Recommended TV Shows</h2>

          <div className="movie-row">

            {recommendedShows.map(show => (

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

        </div>

      )}

    </PageShell>

  );

};