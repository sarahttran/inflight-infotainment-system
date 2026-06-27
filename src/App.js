window.App = function App() {
  const [page, setPage] = React.useState("welcome");
  const [profile, setProfile] = React.useState(null);
  const [invoiceItems, setInvoiceItems] = React.useState([]);

  function addInvoiceItem(category, name, price) {
    setInvoiceItems(function(prev) {
      return [...prev, { category, name, price }];
    });
  }

  function startGuest() {
    setProfile({ name: "Guest", isGuest: true });
    setPage("home");
  }

  function createProfile(name, email) {
    setProfile({ name: name, email: email, isGuest: false });
    setPage("home");
  }

  if (page === "welcome") {
    return <WelcomePage startGuest={startGuest} createProfile={createProfile} />;
  }

  if (page === "food") {
    return <FoodServicesPage setPage={setPage} addInvoiceItem={addInvoiceItem} />;
  }

  if (page === "foodbev") {
    return <FoodBeveragePage setPage={setPage} addInvoiceItem={addInvoiceItem} />;
  }

  if (page === "dutyfree") {
  return <DutyFreePage setPage={setPage} addInvoiceItem={addInvoiceItem} />;
  }

  const capitalizeName = (name = "") => {
    return name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <PageShell title={"Welcome, " + capitalizeName(profile.name)} setPage={setPage}>
      <section className="home-grid">
        <button className="feature-card">Media</button>
        <button className="feature-card">Flight Info</button>
        <button className="feature-card" onClick={() => setPage("food")}>Food Services</button>
        <button className="feature-card">Profile/Settings</button>
      </section>
    </PageShell>
  );
};