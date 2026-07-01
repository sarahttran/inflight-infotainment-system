window.AlbumDetailsPage = function AlbumDetailsPage({
  setPage,
  album
}) {

  if (!album) {

    return (
      <PageShell title="Album" setPage={setPage}>

        <h2>No album selected.</h2>

        <button
          className="primary-button"
          onClick={() => setPage("music-catalog")}
        >
          ← Return to Music
        </button>

      </PageShell>
    );

  }

  return (

    <PageShell title={album.album} setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setPage("music-catalog")}
        >
          ← Back
        </button>
      </div>

      <div className="details-card">

        <img
          src={album.cover}
          alt={album.album}
          style={{
            width: "280px",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        <h2>{album.album}</h2>

        <p>

          <strong>Artist:</strong>

          {" "}

          {album.artist}

        </p>

        <h3>Tracks</h3>

        <ol>

          {album.tracks.map(track => (

            <li key={track}>

              {track}

            </li>

          ))}

        </ol>

        <div
          className="button-row"
          style={{ marginTop: "20px" }}
        >

          <button
            className="primary-button"
            onClick={() =>
              alert("Playing " + album.album)
            }
          >
            ▶ Play Album
          </button>

          <button
            onClick={() =>
              alert(album.album + " added to Favorites!")
            }
          >
            ❤ Favorite Album
          </button>

        </div>

      </div>

    </PageShell>

  );

};