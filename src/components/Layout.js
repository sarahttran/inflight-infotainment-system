window.TopBar = function TopBar() {
  return (
    <header className="top-bar">
      <span>✈</span>
      <span>Flight BWI → LAX</span>
      <span className="top-info">ETA: 6:07 PM</span>
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