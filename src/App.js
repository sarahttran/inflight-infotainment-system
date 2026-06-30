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
    setProfile({
      name: "Guest",
      email: "",
      isGuest: true,
      preferences: {
        genre: "",
        language: "English",
        textSize: "Medium",
        theme: "Light"
      }
    });
    setPage("home");
  }

  function createProfile(name, email) {
    setProfile({
      name: name,
      email: email,
      isGuest: false,
      preferences: {
        genre: "",
        language: "English",
        textSize: "Medium",
        theme: "Light"
      }
    });
    setPage("home");
  }

  if (page === "welcome") {
    return <WelcomePage startGuest={startGuest} createProfile={createProfile} />;
  }

  if (page === "profile-settings") {
    return (
      <ProfileSettingsPage
        setPage={setPage}
        profile={profile}
        setProfile={setProfile}
      />
    );
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

  if (page === "invoice") {
    return <ViewInvoicePage setPage={setPage} invoiceItems={invoiceItems} />;
  }

  if (page === "phonecall") {
  return <PhoneCallPage setPage={setPage} addInvoiceItem={addInvoiceItem} />;
  }

  if (page === "reportissue") {
  return <ReportIssuePage setPage={setPage} />;
  }

  if (page === "flight-info") {
    const invoiceTotal = invoiceItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <FlightInfoPage
        setPage={setPage}
        profileName={profile.name}
        invoiceTotal={invoiceTotal}
      />
    );
  
  }

  if (page === "media") {
    return <MediaPage setPage={setPage} profile={profile} />;
  }

  if (page === "recommended") {
    return <RecommendedPage setPage={setPage} profile={profile} />;
  }

  if (page === "movie-details") {
    return <MovieDetailsPage setPage={setPage} />;
  }

  if (page === "destination") {
    return <DestinationPage setPage={setPage} />;
  }

  const capitalizeName = (name = "") => {
    return name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <PageShell title={"Welcome"} setPage={setPage}>
      <section className="home-grid">
        <button className="feature-card" onClick={() => setPage("media")}>Media</button>
        <button className="feature-card" onClick={() => setPage("flight-info")}>Flight Info</button>
        <button className="feature-card" onClick={() => setPage("food")}>Food & Bev</button>
        <button className="feature-card" onClick={() => setPage("profile-settings")}>
          Profile/Settings
        </button>      
      </section>
    </PageShell>
  );
};
