window.DestinationPage = function DestinationPage({ setPage }) {
  return (
    <PageShell title="Destination Attractions" setPage={setPage}>

      <div className="attraction-card">
        <h3>Universal Orlando Resort</h3>

        <p>
          A world-famous theme park featuring exciting rides,
          entertainment, restaurants, and movie-themed attractions.
        </p>
      </div>

      <div className="attraction-card">
        <h3>Walt Disney World Resort</h3>

        <p>
          Home to four theme parks, water parks, shopping,
          dining, and family-friendly attractions.
        </p>
      </div>

      <div className="attraction-card">
        <h3>Kennedy Space Center Visitor Complex</h3>

        <p>
          Explore NASA history, see real spacecraft,
          and experience interactive space exhibits.
        </p>
      </div>

      <div className="attraction-card">
        <h3>ICON Park</h3>

        <p>
          Entertainment destination featuring The Wheel,
          restaurants, shops, and live attractions.
        </p>
      </div>

      <div className="button-row">
        <button
          className="primary-button"
          onClick={() => setPage("media")}
        >
          ← Back to Media
        </button>
      </div>

    </PageShell>
  );
};