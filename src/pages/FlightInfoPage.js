window.FlightInfoPage = function FlightInfoPage({ setPage, profileName, invoiceTotal }) {
  const flightStats = [
    { label: "Estimated location", value: "Near Wichita, Kansas" },
    { label: "ETA", value: "6:07 PM PT" },
    { label: "Time remaining", value: "2 hr 46 min" },
    { label: "Altitude", value: "36,000 ft" },
    { label: "Speed", value: "548 mph" },
  ];

  return (
    <PageShell title="Flight Information & Safety" setPage={setPage} backTo="home">
      <div className="flight-info">
        <p className="page-note">
          Flight 247 from Baltimore/Washington (BWI) to Los Angeles (LAX).
          Sample information updated at 1:21 PM CT.
        </p>

        <section>
          <h2>Flight Status</h2>
          <div className="placeholder-box">
            <p><strong>Departure:</strong> BWI at 10:35 AM ET</p>
            <p><strong>Destination:</strong> LAX at 6:07 PM PT</p>

            <div className="home-grid flight-info__status-grid">
              {flightStats.map(function(stat) {
                return (
                  <div className="feature-card" key={stat.label}>
                    <strong>{stat.label}</strong>
                    <p>{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <h2>Flight Map</h2>
          <div
            className="placeholder-box flight-info__map"
            role="img"
            aria-label="Map of the United States showing a flight route from BWI in Maryland to LAX in California, with the plane over south-central Kansas near Wichita"
          >
            <svg viewBox="0 0 620 340" aria-hidden="true" focusable="false">
              <rect width="620" height="340" fill="#dceefa" />
              <path
                d="M58 74 L96 54 L151 52 L184 64 L226 57 L271 68 L310 65 L352 74 L390 66 L432 77 L468 72 L501 87 L535 91 L560 111 L552 132 L570 151 L552 169 L559 188 L535 199 L518 221 L492 225 L473 252 L442 265 L409 260 L375 275 L335 271 L300 280 L259 273 L225 282 L190 266 L157 258 L135 236 L111 226 L100 201 L82 184 L75 155 L61 131 L66 105 Z"
                fill="#eef1dd"
                stroke="#7f8f73"
                strokeWidth="2"
              />
              <path
                d="M536 151 Q340 106 116 226"
                fill="none"
                stroke="#c94f4f"
                strokeWidth="4"
                strokeDasharray="9 8"
                strokeLinecap="round"
              />

              <g transform="translate(536 151)">
                <circle r="8" fill="white" stroke="#1f2933" strokeWidth="2" />
                <circle r="3" fill="#1f2933" />
                <text x="14" y="-12" fill="#1f2933" fontSize="16" fontWeight="bold">BWI</text>
              </g>
              <g transform="translate(116 226)">
                <circle r="8" fill="white" stroke="#1f2933" strokeWidth="2" />
                <circle r="3" fill="#1f2933" />
                <text x="12" y="25" fill="#1f2933" fontSize="16" fontWeight="bold">LAX</text>
              </g>
              <g transform="translate(316.1 150.5) rotate(168.2)">
                <circle r="17" fill="#6c94be" stroke="white" strokeWidth="3" />
                <path
                  d="M-14 -2 L-4 -2 L2 -13 L7 -13 L5 -2 L14 1 L14 5 L5 4 L7 13 L2 13 L-4 4 L-14 4 Z"
                  fill="white"
                />
              </g>
              <text
                x="316.1"
                y="187"
                textAnchor="middle"
                fill="#1f2933"
                fontSize="14"
                fontWeight="bold"
              >
                Near Wichita
              </text>
            </svg>
          </div>
        </section>

        <section>
          <h2>Weather & Times</h2>
          <div className="home-grid flight-info__weather-grid">
            <div className="feature-card">
              <strong>Baltimore, MD (BWI)</strong>
              <p>Local time: 2:21 PM ET</p>
              <p>Sunny, 82°F</p>
            </div>
            <div className="feature-card">
              <strong>Los Angeles, CA (LAX)</strong>
              <p>Local time: 11:21 AM PT</p>
              <p>Partly cloudy, 71°F</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Announcements & Crew Messages</h2>
          <div className="placeholder-box flight-info__messages">
            <h3>General Announcement</h3>
            <p>Wi-Fi and cabin service are available. Please keep the aisle clear while the crew is serving the cabin.</p>
            <hr />

            <h3>Pilot Message</h3>
            <p>We are cruising at 36,000 feet with smooth conditions ahead and expect to arrive a few minutes early.</p>
            <hr />

            <h3>Flight Attendant Message</h3>
            <p>Beverage service is underway. Please remain seated whenever the seatbelt sign is illuminated.</p>
            {invoiceTotal > 500 && (
              <p><strong>{profileName || "Guest"} is a big spender!</strong></p>
            )}
          </div>
        </section>

        <section>
          <h2>Safety Information</h2>
          <div className="placeholder-box flight-info__safety">
            <h3>Cabin Safety</h3>
            <ul>
              <li>Keep your seatbelt fastened while seated.</li>
              <li>Keep bags, feet, and personal items clear of the aisle.</li>
              <li>Follow illuminated signs and all crew instructions.</li>
              <li>In an emergency, leave belongings behind and use the nearest available exit.</li>
            </ul>

            <h3>Exit Locations</h3>
            <ul>
              <li><strong>Front exits:</strong> At the front of the cabin.</li>
              <li><strong>Wing exits:</strong> Over each wing in the middle of the cabin.</li>
              <li><strong>Rear exits:</strong> At the back of the cabin.</li>
            </ul>
          </div>
        </section>
      </div>
    </PageShell>
  );
};
