window.FoodServicesPage = function FoodServicesPage({ setPage, addInvoiceItem }) {
  return (
    <PageShell title="Food & Services" setPage={setPage}>
      <section className="home-grid">
        <button className="feature-card" onClick={() => setPage("foodbev")}>Food & Beverage</button>
        <button className="feature-card" onClick={() => setPage("dutyfree")}>Duty-Free Shopping</button>
        <button className="feature-card" onClick={() => setPage("invoice")}>View Invoice</button>
      </section>
      <button className="primary-button" onClick={() => setPage("attendant")}>Call Flight Attendant</button>
    </PageShell>
  );
};