const FLIGHT_UPDATE_INTERVAL_MS = 5 * 1000;
const INITIAL_TIME_REMAINING_MINUTES = 166;
const INITIAL_FLIGHT_PROGRESS = 0.48;
const SIMULATED_MINUTES_PER_UPDATE = 2;

function formatFlightTime(date, timeZone, suffix, includeSeconds) {
  const options = {
    hour: "numeric",
    minute: "2-digit",
    timeZone: timeZone
  };

  if (includeSeconds) {
    options.second = "2-digit";
  }

  return new Intl.DateTimeFormat("en-US", options).format(date) + " " + suffix;
}

function formatTimeRemaining(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return minutes + " min";
  }

  return hours + " hr " + minutes + " min";
}

function createSimulatedFlightData(sessionStartedAt, currentTime) {
  const elapsedSessionMinutes = Math.floor(
    (currentTime.getTime() - sessionStartedAt) / FLIGHT_UPDATE_INTERVAL_MS
  );
  const simulatedElapsedMinutes = elapsedSessionMinutes * SIMULATED_MINUTES_PER_UPDATE;
  const remainingMinutes = Math.max(
    0,
    INITIAL_TIME_REMAINING_MINUTES - simulatedElapsedMinutes
  );
  const progress = Math.min(
    1,
    INITIAL_FLIGHT_PROGRESS +
      (simulatedElapsedMinutes / INITIAL_TIME_REMAINING_MINUTES) *
        (1 - INITIAL_FLIGHT_PROGRESS)
  );
  const progressPercent = (progress * 100).toFixed(1);
  const eta = new Date(currentTime.getTime() + remainingMinutes * 60 * 1000);
  const altitudePattern = [36000, 35900, 36100, 36000, 36200, 35900];
  const speedPattern = [548, 543, 551, 546, 554, 545];
  const weatherPattern = [
    {
      departure: "Sunny, 82\u00B0F",
      destination: "Partly cloudy, 71\u00B0F"
    },
    {
      departure: "Sunny, 83\u00B0F",
      destination: "Partly cloudy, 72\u00B0F"
    },
    {
      departure: "Mostly sunny, 82\u00B0F",
      destination: "Mostly sunny, 72\u00B0F"
    }
  ];
  const patternIndex = elapsedSessionMinutes % altitudePattern.length;
  const weather = weatherPattern[elapsedSessionMinutes % weatherPattern.length];
  let location = "Near Wichita, Kansas";

  if (progress >= 0.9) {
    location = "Approaching Los Angeles, California";
  } else if (progress >= 0.78) {
    location = "Over northern Arizona";
  } else if (progress >= 0.66) {
    location = "Over eastern New Mexico";
  } else if (progress >= 0.54) {
    location = "Over western Kansas";
  }

  const descending = remainingMinutes < 30;
  const altitude = remainingMinutes === 0
    ? 0
    : descending
      ? Math.max(3000, Math.round((remainingMinutes / 30) * 36000 / 100) * 100)
      : altitudePattern[patternIndex];
  const speed = remainingMinutes === 0
    ? 0
    : descending
      ? Math.max(180, Math.round(remainingMinutes / 30 * 545))
      : speedPattern[patternIndex];

  return {
    currentLocation: location + " (" + progressPercent + "% complete)",
    eta: formatFlightTime(eta, "America/Los_Angeles", "PT", false),
    timeRemaining: formatTimeRemaining(remainingMinutes),
    altitude: altitude,
    speed: speed,
    departureWeather: weather.departure,
    destinationWeather: weather.destination,
    bwiLocalTime: formatFlightTime(currentTime, "America/New_York", "ET", false),
    laxLocalTime: formatFlightTime(currentTime, "America/Los_Angeles", "PT", false),
    updatedAt: formatFlightTime(currentTime, "America/Chicago", "CT", true),
    progress: progress,
    progressPercent: progressPercent
  };
}

window.App = function App() {
  const [profile, setProfile] = React.useState(function() {
    const savedProfile = window.sessionStorage.getItem("profile");

    if (savedProfile) {
      return JSON.parse(savedProfile);
    }

    return null;
  });

  const [page, setPage] = React.useState(function() {
    const savedPage = window.sessionStorage.getItem("page");
    const savedProfile = window.sessionStorage.getItem("profile");

    if (savedPage && savedProfile) {
      return savedPage;
    }

    return "welcome";
  });

const [invoiceItems, setInvoiceItems] = React.useState(function() {
  const savedInvoiceItems = window.localStorage.getItem("invoiceItems");

    if (savedInvoiceItems) {
      return JSON.parse(savedInvoiceItems);
    }

    return [];
  });
  
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);

  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [selectedShow, setSelectedShow] = React.useState(null);
  const [selectedAlbum, setSelectedAlbum] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState(null);


  const sessionStartedAt = React.useRef(Date.now());
  const [flightData, setFlightData] = React.useState(function() {
    return createSimulatedFlightData(sessionStartedAt.current, new Date());
  });

React.useEffect(function() {
  if (profile) {
    window.sessionStorage.setItem("profile", JSON.stringify(profile));
  } else {
    window.sessionStorage.removeItem("profile");
    window.sessionStorage.removeItem("page");
  }
}, [profile]);

React.useEffect(function() {
  window.sessionStorage.setItem("page", page);
}, [page]);

React.useEffect(function() {
  window.localStorage.setItem("invoiceItems", JSON.stringify(invoiceItems));
}, [invoiceItems]);

React.useEffect(function() {
  function updateFlightData() {
    setFlightData(createSimulatedFlightData(sessionStartedAt.current, new Date()));
  }

  updateFlightData();
  const intervalId = window.setInterval(updateFlightData, FLIGHT_UPDATE_INTERVAL_MS);

  return function() {
    window.clearInterval(intervalId);
  };
}, []);

  function addInvoiceItem(category, name, price, paymentMethod) {
    setInvoiceItems(function(prev) {
      return [...prev, { category, name, price, paymentMethod: paymentMethod || "Credit Card" }];
    });
  }

  function addFavorite(movie) {
    setFavoriteMovies(prev => {
      if (prev.some(m => m.id === movie.id)) {
        return prev;
      }

      return [...prev, movie];
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

  function renderCurrentPage() {

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

  if (page === "services") {
    return <ServicesHelpPage setPage={setPage} />;
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
        flightData={flightData}
      />
    );
  }

  if (page === "media") {
    return (
      <MediaPage
        setPage={setPage}
        profile={profile}
        setSelectedMovie={setSelectedMovie}
        setSelectedShow={setSelectedShow}
        setSelectedAlbum={setSelectedAlbum}
      />
    );
  }

  if (page === "movie-details") {
    return (
      <MovieDetailsPage
    setPage={setPage}
    movie={selectedMovie}
    addFavorite={addFavorite}
    />
    );
  }

  if (page === "tv-catalog") {
  return (
    <TVCatalogPage
      setPage={setPage}
      shows={window.mediaData.shows}
      setSelectedShow={setSelectedShow}
    />
    );
  }

  if (page === "tv-details") {
  return (
    <TVDetailsPage
      setPage={setPage}
      show={selectedShow}
    />
    );
  }

  if (page === "movie-catalog") {
  return <MovieCatalogPage
    setPage={setPage}
    movies={mediaData.movies}
    setSelectedMovie={setSelectedMovie}
  />;
  }

  if (page === "favorite-movies") {
    return (
      <FavoriteMoviesPage
        setPage={setPage}
        favoriteMovies={favoriteMovies}
      />
    );
  }
  
  if (page === "music-catalog") {
    return (
      <MusicCatalogPage
        setPage={setPage}
        albums={window.mediaData.music}
        setSelectedAlbum={setSelectedAlbum}
      />
    );
  }

  if (page === "album-details") {
    return (
      <AlbumDetailsPage
        setPage={setPage}
        album={selectedAlbum}
      />
    );
  }

  if (page === "trending") {
    return (
      <TrendingPage
        setPage={setPage}
        movies={window.mediaData.movies.slice(0, 4)}
        shows={window.mediaData.shows.slice(0, 4)}
        setSelectedMovie={setSelectedMovie}
        setSelectedShow={setSelectedShow}
      />
    );
  }

  if (page === "recommended") {
    return (
      <RecommendedPage
        setPage={setPage}
        profile={profile}
        movies={window.mediaData.movies}
        shows={window.mediaData.shows}
        setSelectedMovie={setSelectedMovie}
        setSelectedShow={setSelectedShow}
    />
  );
}

  if (page === "destination") {
    return (
      <DestinationPage
        setPage={setPage}
        locations={window.mediaData.locations}
        setSelectedLocation={setSelectedLocation}
      />
    );
  }

  if (page === "attractions") {
    return (
      <AttractionsPage
        setPage={setPage}
        location={selectedLocation}
      />
    );
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
        <button className="feature-card" onClick={() => setPage("media")}>
          Media
        </button>

        <button className="feature-card" onClick={() => setPage("flight-info")}>
          Flight Info
        </button>

        <button className="feature-card" onClick={() => setPage("foodbev")}>
          Food & Bev
        </button>

        <button className="feature-card" onClick={() => setPage("dutyfree")}>
          Shopping
        </button>

        <button className="feature-card" onClick={() => setPage("services")}>
          Services / Help
        </button>

        <button className="feature-card" onClick={() => setPage("profile-settings")}>
          Profile/Settings
        </button>
      </section>
    </PageShell>
  );
  }

  return (
    <window.FlightDataContext.Provider value={flightData}>
      {renderCurrentPage()}
    </window.FlightDataContext.Provider>
  );
};
