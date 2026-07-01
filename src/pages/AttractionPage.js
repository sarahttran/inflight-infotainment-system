window.AttractionsPage = function AttractionsPage({
  setPage,
  location
}) {

  if (!location) {
    return (
      <PageShell title="Attractions" setPage={setPage}>
        <h2>No location selected.</h2>
      </PageShell>
    );
  }

  return (
    <PageShell
      title={location.city + " Attractions"}
      setPage={setPage}
    >

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("destination")}>
          ← Back
        </button>
      </div>

      <div className="attraction-grid">

        {location.attractions.map(attraction => (

          <div
            key={attraction.name}
            className="attraction-tile"
          >

            <img
              src={attraction.image}
              alt={attraction.name}
            />

            <div className="attraction-info">

              <h3>{attraction.name}</h3>

              <p>{attraction.description}</p>

            </div>

          </div>

        ))}

      </div>

    </PageShell>
  );
};