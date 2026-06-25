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
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("welcome")}>Start Over</button>
    </nav>
  );
};

window.PageShell = function PageShell({ title, children, setPage }) {
  return (
    <div className="app-frame">
      <TopBar />

      <main className="page-content">
        <h1>{title}</h1>
        {children}
      </main>

      <BottomNav setPage={setPage} />
    </div>
  );
};