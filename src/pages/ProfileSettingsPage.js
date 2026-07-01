window.ProfileSettingsPage = function ProfileSettingsPage({ setPage, profile, setProfile }) {
  const savedPreferences = profile && profile.preferences
    ? profile.preferences
    : {
        genre: "",
        language: "English",
        textSize: "Medium",
        theme: "Light"
      };

  const savedName = profile && profile.name ? profile.name : "";
  const savedEmail = profile && profile.email ? profile.email : "";
  const savedGenre = savedPreferences.genre || "";
  const savedLanguage = savedPreferences.language || "English";
  const savedTextSize = savedPreferences.textSize || "Medium";
  const savedTheme = savedPreferences.theme || "Light";

  const [name, setName] = React.useState(savedName);
  const [email, setEmail] = React.useState(savedEmail);
  const [genre, setGenre] = React.useState(savedGenre);
  const [language, setLanguage] = React.useState(savedLanguage);
  const [textSize, setTextSize] = React.useState(savedTextSize);
  const [theme, setTheme] = React.useState(savedTheme);

  function hasUnsavedChanges() {
    return (
      name !== savedName ||
      email !== savedEmail ||
      genre !== savedGenre ||
      language !== savedLanguage ||
      textSize !== savedTextSize ||
      theme !== savedTheme
    );
  }

  function goToPage(nextPage) {
    if (nextPage === "profile-settings") {
      return;
    }

    if (hasUnsavedChanges()) {
      var shouldLeave = window.confirm(
        "You have unsaved profile changes. If you leave now, your changes will not be saved. Click OK to leave without saving, or Cancel to stay and save your changes."
      );

      if (!shouldLeave) {
        return;
      }
    }

    setPage(nextPage);
  }

  function handleSave(event) {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Please enter a name.");
      return;
    }

    setProfile({
      name: name,
      email: email,
      isGuest: profile ? profile.isGuest : false,
      preferences: {
        genre: genre,
        language: language,
        textSize: textSize,
        theme: theme
      }
    });

    alert("Profile and preferences updated!");
    setPage("home");
  }

  function handleLogout() {
    if (hasUnsavedChanges()) {
      var shouldLogout = window.confirm(
        "You have unsaved profile changes. If you log out now, your changes will not be saved. Click OK to log out without saving, or Cancel to stay and save your changes."
      );

      if (!shouldLogout) {
        return;
      }
    }

    setProfile(null);
    setPage("welcome");
  }

  return (
    <PageShell title="Profile / Settings" setPage={goToPage} backTo="home">
      <form className="form-stack" onSubmit={handleSave}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={function(event) { setName(event.target.value); }}
            placeholder="Name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={function(event) { setEmail(event.target.value); }}
            placeholder="email@domain.com"
          />
        </label>

        <label>
          Favorite Genre
          <select value={genre} onChange={function(event) { setGenre(event.target.value); }}>
            <option value="">No genre selected</option>
            <option value="Family">Family</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
          </select>
        </label>

        <label>
          Language
          <select value={language} onChange={function(event) { setLanguage(event.target.value); }}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </label>

        <label>
          Text Size
          <select value={textSize} onChange={function(event) { setTextSize(event.target.value); }}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <label>
          Theme
          <select value={theme} onChange={function(event) { setTheme(event.target.value); }}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </label>

        <div className="button-row">
          <button type="submit" className="primary-button">
            Save Changes
          </button>

          <button type="button" onClick={function() { goToPage("home"); }}>
            Cancel
          </button>
        </div>

        <button
          type="button"
          className="back-button"
          style={{ marginTop: "20px" }}
          onClick={handleLogout}
        >
          Log Out
        </button>
      </form>
    </PageShell>
  );
};