window.FoodServicesPage = function FoodServicesPage({ setPage, addInvoiceItem }) {
  return (
    <PageShell title="Food & Services" setPage={setPage} backTo="home">
      <section className="home-grid">
        <button className="feature-card" onClick={() => setPage("foodbev")}><span>🍽️</span>Food & Beverage</button>
        <button className="feature-card" onClick={() => setPage("dutyfree")}><span>🛍️</span>Duty-Free Shopping</button>
        <button className="feature-card" onClick={() => setPage("phonecall")}><span>📞</span>Phone Call</button>
        <button className="feature-card" onClick={() => setPage("invoice")}><span>🧾</span>View Invoice</button>
        <button className="feature-card" onClick={() => setPage("reportissue")}><span>💬</span>Report Issue / Feedback</button>
      </section>

      <div style={{ marginTop: "30px" }}>
        <button className="primary-button" onClick={() => alert("Flight attendant has been called!")}>
          🔔 Call Flight Attendant
        </button>
      </div>
    </PageShell>
  );
};