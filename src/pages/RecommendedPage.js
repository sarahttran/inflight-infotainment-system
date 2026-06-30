window.RecommendedPage = function RecommendedPage({ setPage, profile }) {
  const favoriteGenre =
    profile && profile.preferences && profile.preferences.genre
      ? profile.preferences.genre
      : "";

  const recommendations = {
    Family: [
      {
        title: "Finding Nemo",
        image: "./assets/finding-nemo.jpg",
        genre: "Family",
        rating: "G",
        duration: "1 hr 40 min",
        cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        synopsis: "A clownfish travels across the ocean to find his son after they are separated."
      },
      {
        title: "Toy Story",
        image: "./assets/toy-story.jpg",
        genre: "Family",
        rating: "G",
        duration: "1 hr 21 min",
        cast: ["Tom Hanks", "Tim Allen", "Annie Potts"],
        synopsis: "A group of toys comes to life when humans are not around and learns the value of friendship."
      },
      {
        title: "The Parent Trap",
        image: "./assets/the-parent-trap.jpg",
        genre: "Family / Comedy",
        rating: "PG",
        duration: "2 hr 8 min",
        cast: ["Lindsay Lohan", "Dennis Quaid", "Natasha Richardson"],
        synopsis: "Twin sisters meet for the first time at summer camp and switch places to reunite their parents."
      }
    ],

    Action: [
      {
        title: "Jurassic Park",
        image: "./assets/jurassic-park.jpg",
        genre: "Action / Adventure",
        rating: "PG-13",
        duration: "2 hr 7 min",
        cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        synopsis: "A dinosaur theme park becomes dangerous when the security systems fail."
      },
      {
        title: "Top Gun",
        image: "./assets/top-gun.jpg",
        genre: "Action",
        rating: "PG",
        duration: "1 hr 50 min",
        cast: ["Tom Cruise", "Kelly McGillis", "Val Kilmer"],
        synopsis: "A fighter pilot trains at an elite Navy flight school while learning about teamwork and discipline."
      },
      {
        title: "Mission Impossible",
        image: "./assets/mission-impossible.jpg",
        genre: "Action",
        rating: "PG-13",
        duration: "1 hr 50 min",
        cast: ["Tom Cruise", "Jon Voight", "Ving Rhames"],
        synopsis: "A secret agent works to uncover the truth after a mission goes wrong."
      }
    ],

    Comedy: [
      {
        title: "The Parent Trap",
        image: "./assets/the-parent-trap.jpg",
        genre: "Comedy / Family",
        rating: "PG",
        duration: "2 hr 8 min",
        cast: ["Lindsay Lohan", "Dennis Quaid", "Natasha Richardson"],
        synopsis: "Twin sisters switch places and create a plan to bring their family back together."
      },
      {
        title: "School of Rock",
        image: "./assets/school-of-rock.jpg",
        genre: "Comedy",
        rating: "PG-13",
        duration: "1 hr 49 min",
        cast: ["Jack Black", "Joan Cusack", "Miranda Cosgrove"],
        synopsis: "A struggling musician becomes a substitute teacher and starts a rock band with his students."
      },
      {
        title: "Night at the Museum",
        image: "./assets/night-at-the-museum.jpg",
        genre: "Comedy / Adventure",
        rating: "PG",
        duration: "1 hr 48 min",
        cast: ["Ben Stiller", "Robin Williams", "Owen Wilson"],
        synopsis: "A museum night guard discovers that the exhibits come to life after dark."
      }
    ]
  };

  const recommendedMovies = recommendations[favoriteGenre];

  return (
    <PageShell title="Recommended For You" setPage={setPage}>

      <div className="button-row" style={{ marginBottom: "20px" }}>
        <button
          className="back-button"
          onClick={() => setPage("media")}
        >
          ← Back
        </button>
      </div>

      {!favoriteGenre ? (
        <div className="placeholder-box">
          <h2>No Preferred Genre Selected</h2>
          <p>
            You have not selected a preferred genre yet. Go to Profile/Settings and choose
            Family, Action, or Comedy to see personalized recommendations.
          </p>

          <div className="button-row" style={{ marginTop: "20px" }}>
            <button className="primary-button" onClick={function() { setPage("profile-settings"); }}>
              Go to Profile/Settings
            </button>
            
          </div>
        </div>
      ) : (
        <div>
          <p className="page-note">
            These recommendations are based on your saved favorite genre:
            <strong> {favoriteGenre}</strong>
          </p>

          {recommendedMovies.map(function(movie) {
            return (
              <div className="details-card" key={movie.title} style={{ marginBottom: "24px" }}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: "250px",
                    borderRadius: "12px",
                    marginBottom: "20px"
                  }}
                />

                <h2>{movie.title}</h2>

                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <p><strong>Duration:</strong> {movie.duration}</p>

                <p>
                  <strong>Cast:</strong><br />
                  {movie.cast.map(function(actor) {
                    return (
                      <span key={actor}>
                        {actor}<br />
                      </span>
                    );
                  })}
                </p>

                <p>
                  <strong>Synopsis:</strong><br />
                  {movie.synopsis}
                </p>

                <div className="button-row">
                  <button
                    className="primary-button"
                    onClick={function() { alert("Playing " + movie.title + "..."); }}
                  >
                    ▶ Play
                  </button>

                  <button onClick={function() { alert("Added to Favorites!"); }}>
                    ❤ Add to Favorites
                  </button>
                </div>
              </div>
            );
          })}

          <div className="button-row">
            <button className="back-button" onClick={function() { setPage("media"); }}>
              ← Back
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
};