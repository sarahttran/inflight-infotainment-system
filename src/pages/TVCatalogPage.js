window.TVCatalogPage = function TVCatalogPage({
  setPage,
  shows,
  setSelectedShow
}) {

  return (
    <PageShell title="TV Shows" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      <div className="movie-row">

        <div
          className="movie-poster"
          onClick={() => setPage("favorite-shows")}
        >
          <div className="favorite-poster">
            ⭐
          </div>

          <p>Favorites</p>
        </div>

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