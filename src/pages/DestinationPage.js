window.DestinationPage = function DestinationPage({ setPage }) {
  const attractions = [
    {
      name: "Universal Orlando Resort",
      image: "./assets/universal.avif",
      description:
        "A world-famous theme park featuring exciting rides, entertainment, restaurants, and movie-themed attractions."
    },
    {
      name: "Walt Disney World Resort",
      image: "./assets/disney.webp",
      description:
        "Home to four theme parks, water parks, shopping, dining, and family-friendly attractions."
    },
    {
      name: "Kennedy Space Center Visitor Complex",
      image: "./assets/space-center.jpg",
      description:
        "Explore NASA history, see real spacecraft, and experience interactive space exhibits."
    },
    {
      name: "ICON Park",
      image: "./assets/ICON.jpg",
      description:
        "Entertainment destination featuring The Wheel, restaurants, shops, and live attractions."
    }
  ];

  return (
    <PageShell title="Destination Attractions" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      <section className="item-menu-grid">
        {attractions.map(function(attraction, index) {
          return (
            <div key={index} className="item-card">
              <img
                className="item-image"
                src={attraction.image}
                alt={attraction.name}
              />

              <h3 className="item-title">{attraction.name}</h3>

              <p>{attraction.description}</p>
            </div>
          );
        })}
      </section>

    </PageShell>
  );
};