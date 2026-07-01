window.WelcomePage = function WelcomePage({ startGuest, createProfile }) {
  const [showForm, setShowForm] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleCreateProfile(event) {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Please enter a profile name, or continue as guest.");
      return;
    }

    createProfile(name, email);
  }

  if (showForm) {
    return (
      <div className="welcome-screen">
        <section className="welcome-card welcome-card-animated">
          <h1 className="welcome-title">Create Profile</h1>
          <p className="welcome-subtitle">Set up your in-flight session.</p>

          <form onSubmit={handleCreateProfile} className="form-stack">
            <label className="welcome-slide-left">
              Name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
              />
            </label>

            <label className="welcome-slide-right">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email@domain.com"
              />
            </label>

            <button type="submit" className="primary-button welcome-button welcome-slide-left">
              Save Profile
            </button>

            <button type="button" className="welcome-button welcome-slide-right" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="welcome-screen">
      <section className="welcome-card welcome-card-animated">
        <div className="welcome-logo welcome-logo-animated">
          <div className="welcome-logo-icon">✈</div>

          <div>
            <div className="welcome-logo-main">Cloud</div>
          </div>
        </div>

        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-subtitle">Start your in-flight entertainment session</p>

        <button className="primary-button welcome-button welcome-slide-left" onClick={startGuest}>
          Continue as Guest
        </button>

        <button className="primary-button welcome-button welcome-slide-right" onClick={() => setShowForm(true)}>
          Create Profile
        </button>
      </section>
    </div>
  );

  return (
    <div className="welcome-screen">
      <section className="welcome-card welcome-card-animated">
        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-subtitle">Start your in-flight entertainment session.</p>

        <button className="primary-button welcome-button welcome-slide-left" onClick={startGuest}>
          Continue as Guest
        </button>

        <button className="primary-button welcome-button welcome-slide-right" onClick={() => setShowForm(true)}>
          Create Profile
        </button>
      </section>
    </div>
  );
};