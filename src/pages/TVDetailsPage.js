window.TVDetailsPage = function TVDetailsPage({
  setPage,
  show
}) {

  if (!show) {
    return (
      <PageShell title="TV Show" setPage={setPage}>

        <h2>No TV show selected.</h2>

        <div className="button-row" style={{ marginTop: "20px" }}>
          <button
            className="primary-button"
            onClick={() => setPage("tv-catalog")}
          >
            ← Return to TV Catalog
          </button>
        </div>

      </PageShell>
    );
  }

  return (
    <PageShell title={show.title} setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("tv-catalog")}
        >
          ← Back
        </button>
      </div>

      <div className="details-card">

        <img
          src={show.poster}
          alt={show.title}
          style={{
            width: "250px",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        <h2>{show.title}</h2>

        <p>
          <strong>Genre:</strong> {show.genre}
        </p>

        {show.seasons.map(season => (

          <div
            key={season.season}
            style={{ marginTop: "25px" }}
          >

            <h3>Season {season.season}</h3>

            <ul>

              {season.episodes.map((episode, index) => (

                <li key={index}>
                  Episode {index + 1} - {episode}
                </li>

              ))}

            </ul>

          </div>

        ))}

        <div
          className="button-row"
          style={{ marginTop: "25px" }}
        >

          <button
            className="primary-button"
            onClick={() =>
              alert("Resuming " + show.title + "...")
            }
          >
            ▶ Resume Watching
          </button>

          <button
            onClick={() =>
              alert(show.title + " added to Favorites!")
            }
          >
            ❤ Add to Favorites
          </button>

        </div>

      </div>

    </PageShell>
  );

};