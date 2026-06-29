window.FoodServicesPage = function FoodServicesPage({ setPage, addInvoiceItem }) {
  return (
    <PageShell title="Food & Services" setPage={setPage}>
      <section className="home-grid">
        <button className="feature-card" onClick={() => setPage("foodbev")}>Food & Beverage</button>
        <button className="feature-card" onClick={() => setPage("dutyfree")}>Duty-Free Shopping</button>
        <button className="feature-card" onClick={() => setPage("phonecall")}>📞 Phone Call</button>
        <button className="feature-card" onClick={() => setPage("invoice")}>View Invoice</button>
        <button className="feature-card" onClick={() => setPage("reportissue")}>📝 Report Issue / Feedback</button>
      </section>

      <div style={{ marginTop: "30px" }}>
        <button className="primary-button" onClick={() => alert("Flight attendant has been called!")}>
          🔔 Call Flight Attendant
        </button>
      </div>
    </PageShell>
  );
};