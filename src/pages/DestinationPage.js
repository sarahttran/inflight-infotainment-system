window.DestinationPage = function DestinationPage({
  setPage,
  locations,
  setSelectedLocation
}) {
  return (
    <PageShell title="Locations" setPage={setPage}>
      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("media")}>
          ← Back
        </button>
      </div>

      <div className="movie-row">
        {locations.map(location => (
          <div
            key={location.id}
            className="movie-poster"
            onClick={() => {
              setSelectedLocation(location);
              setPage("attractions");
            }}
          >
            <img
              src={location.image}
              alt={location.city}
            />
            <p>{location.city}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
};