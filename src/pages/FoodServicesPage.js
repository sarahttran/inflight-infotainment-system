window.FoodServicesPage = function FoodServicesPage({ setPage }) {
  return (
    <PageShell title="Food & Services" setPage={setPage}>
      <section className="home-grid">
        <button className="feature-card">Food & Beverage</button>
        <button className="feature-card">Duty-Free Shopping</button>
        <button className="feature-card">View Invoice</button>
      </section>
      <button className="primary-button">Call Flight Attendant</button>
    </PageShell>
  );
};