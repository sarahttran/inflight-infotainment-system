window.MovieDetailsPage = function MovieDetailsPage({ setPage }) {
  return (
    <PageShell title="Movie Details" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      <div className="details-card">

        <img
          src="./assets/jurassic-park.jpg"
          alt="Jurassic Park"
          style={{
            width: "250px",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        <h2>Jurassic Park (1993)</h2>

        <p><strong>Genre:</strong> Adventure / Science Fiction</p>

        <p><strong>Rating:</strong> PG-13</p>

        <p><strong>Duration:</strong> 2 hr 7 min</p>

        <p>
          <strong>Cast:</strong><br />
          Sam Neill<br />
          Laura Dern<br />
          Jeff Goldblum<br />
          Richard Attenborough
        </p>

        <p>
          <strong>Synopsis:</strong><br />
          A group of scientists and visitors tour a revolutionary
          theme park populated by cloned dinosaurs. When the park's
          security systems fail, the dinosaurs escape and the visitors
          must fight to survive.
        </p>

        <div className="button-row">
          <button
            className="primary-button"
            onClick={() => alert("Playing Jurassic Park...")}
          >
            ▶ Play
          </button>

          <button
            onClick={() => alert("Added to Favorites!")}
          >
            ❤ Add to Favorites
          </button>
        </div>

      </div>
    </PageShell>
  );
};