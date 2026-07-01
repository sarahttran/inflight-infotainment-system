window.MusicCatalogPage = function MusicCatalogPage({
  setPage,
  albums,
  setSelectedAlbum
}) {

  return (
    <PageShell title="Music" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      <div className="album-row">

        <div
          className="album-cover"
          onClick={() => setPage("favorite-albums")}
        >
          <div className="favorite-album">
            ⭐
          </div>

          <p>Favorites</p>

        </div>

        {albums.map(album => (

          <div
            key={album.id}
            className="album-cover"
            onClick={() => {

              setSelectedAlbum(album);

              setPage("album-details");

            }}
          >

            <img
              src={album.cover}
              alt={album.album}
            />

            <p>{album.album}</p>

          </div>

        ))}

      </div>

    </PageShell>
  );

};