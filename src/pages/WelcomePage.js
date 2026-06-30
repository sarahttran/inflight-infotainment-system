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
        <section className="welcome-card">
          <h1>Create Profile</h1>

          <form onSubmit={handleCreateProfile} className="form-stack">
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email@domain.com"
              />
            </label>

            <button type="submit" className="primary-button">Save Profile</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="welcome-screen">
      <section className="welcome-card">
        <h1>Welcome</h1>
        <p>Start your in-flight entertainment session.</p>

        <button className="primary-button" onClick={startGuest}>
          Continue as Guest
        </button>

        <button className="primary-button" onClick={() => setShowForm(true)}>
            Create Profile
        </button>
      </section>
    </div>
  );
};