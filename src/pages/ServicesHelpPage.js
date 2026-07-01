window.ServicesHelpPage = function ServicesHelpPage({ setPage }) {
  return (
    <PageShell title="Services / Help" setPage={setPage} backTo="home">
      <section className="home-grid">
        <button className="feature-card" onClick={() => setPage("phonecall")}>
          <span>📞</span>
          Phone Call
        </button>

        <button className="feature-card" onClick={() => setPage("invoice")}>
          <span>🧾</span>
          View Invoice
        </button>

        <button className="feature-card" onClick={() => setPage("reportissue")}>
          <span>💬</span>
          Report Issue / Feedback
        </button>
      </section>

    </PageShell>
  );
};