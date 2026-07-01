window.FlightDataContext = React.createContext(null);

window.TopBar = function TopBar() {
  const flightData = React.useContext(window.FlightDataContext);

  if (!flightData) {
    return (
      <header className="top-bar">
        <span className="plane-icon" aria-hidden="true">&#9992;</span>
        <strong>Flight BWI &rarr; LAX</strong>
      </header>
    );
  }

  return (
    <header className="top-bar">
      <div className="top-bar__route">
        <span className="plane-icon" aria-hidden="true">&#9992;</span>
        <div>
          <strong>Flight BWI &rarr; LAX</strong>
          <span className="top-bar__location">{flightData.currentLocation}</span>
        </div>
      </div>

      <div className="top-bar__details" aria-label="Current flight information">
        <span><strong>ETA:</strong> {flightData.eta}</span>
        <span><strong>Remaining:</strong> {flightData.timeRemaining}</span>
        <span><strong>Altitude:</strong> {flightData.altitude.toLocaleString()} ft</span>
        <span><strong>Speed:</strong> {flightData.speed} mph</span>
        <span><strong>Weather:</strong> {flightData.destinationWeather}</span>
        <span><strong>Updated:</strong> {flightData.updatedAt}</span>
      </div>
    </header>
  );
};

window.BottomNav = function BottomNav({ setPage }) {
  return (
    <nav className="bottom-nav">
      <button className="bottom-nav-button" onClick={() => setPage("home")}>
        <img
          src="./assets/home-icon.png"
          alt="Home"
          className="bottom-nav-icon"
        />
        <span>Home</span>
      </button>

      <button className="bottom-nav-button" onClick={() => setPage("profile-settings")}>
        <img
          src="./assets/profile-icon.png"
          alt="Profile Settings"
          className="bottom-nav-icon"
        />
        <span>Profile/Settings</span>
      </button>
    </nav>
  );
};

window.PageShell = function PageShell({ title, children, setPage, backTo }) {
  return (
    <div className="app-frame">
      <TopBar />

      <button
        className="floating-attendant-button"
        onClick={function() { alert("Flight attendant has been called!"); }}
        title="Call Flight Attendant"
      >
        🔔
      </button>

      <main className="page-content">
        {backTo && (
          <div className="top-back-row">
            <button
              type="button"
              className="back-button"
              onClick={function() { setPage(backTo); }}
            >
              ← Back
            </button>
          </div>
        )}

        <h1>{title}</h1>
        {children}
      </main>

      <BottomNav setPage={setPage} />
    </div>
  );
};
