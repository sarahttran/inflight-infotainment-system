window.FlightInfoPage = function FlightInfoPage({ setPage, profileName, invoiceTotal, flightData }) {
  const routeStart = { x: 536, y: 151 };
  const routeControl = { x: 340, y: 106 };
  const routeEnd = { x: 116, y: 226 };
  const progress = Math.max(0, Math.min(1, flightData.progress));
  const remainingProgress = 1 - progress;
  const planeX =
    remainingProgress * remainingProgress * routeStart.x +
    2 * remainingProgress * progress * routeControl.x +
    progress * progress * routeEnd.x;
  const planeY =
    remainingProgress * remainingProgress * routeStart.y +
    2 * remainingProgress * progress * routeControl.y +
    progress * progress * routeEnd.y;
  const tangentX =
    2 * remainingProgress * (routeControl.x - routeStart.x) +
    2 * progress * (routeEnd.x - routeControl.x);
  const tangentY =
    2 * remainingProgress * (routeControl.y - routeStart.y) +
    2 * progress * (routeEnd.y - routeControl.y);
  const planeAngle = Math.atan2(tangentY, tangentX) * 180 / Math.PI;
  const planeTransform =
    "translate(" + planeX.toFixed(1) + " " + planeY.toFixed(1) + ") " +
    "rotate(" + planeAngle.toFixed(1) + ")";
  const mapLocation = flightData.currentLocation.split(" (")[0];
  const flightStats = [
    { label: "Estimated location", value: flightData.currentLocation },
    { label: "ETA", value: flightData.eta },
    { label: "Time remaining", value: flightData.timeRemaining },
    { label: "Altitude", value: flightData.altitude.toLocaleString() + " ft" },
    { label: "Speed", value: flightData.speed + " mph" },
  ];

  return (
    <PageShell title="Flight Information & Safety" setPage={setPage} backTo="home">
      <div className="flight-info">
        <p className="page-note">
          Flight 247 from Baltimore/Washington (BWI) to Los Angeles (LAX).
          Simulated information updated at {flightData.updatedAt}.
        </p>

        <section>
          <h2>Flight Status</h2>
          <div className="placeholder-box">
            <p><strong>Departure:</strong> BWI at 10:35 AM ET</p>
            <p><strong>Destination:</strong> LAX, estimated arrival {flightData.eta}</p>

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
            aria-label={
              "Map of the United States showing a flight route from BWI to LAX, " +
              "with the plane " + mapLocation + " at " + flightData.progressPercent +
              " percent complete"
            }
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
              <g transform={planeTransform}>
                <circle r="17" fill="#6c94be" stroke="white" strokeWidth="3" />
                <path
                  d="M-14 -2 L-4 -2 L2 -13 L7 -13 L5 -2 L14 1 L14 5 L5 4 L7 13 L2 13 L-4 4 L-14 4 Z"
                  fill="white"
                />
              </g>
              <text
                x={planeX}
                y={planeY + 37}
                textAnchor="middle"
                fill="#1f2933"
                fontSize="14"
                fontWeight="bold"
              >
                {mapLocation}
              </text>
            </svg>
          </div>
        </section>

        <section>
          <h2>Weather & Times</h2>
          <div className="home-grid flight-info__weather-grid">
            <div className="feature-card">
              <strong>Baltimore, MD (BWI)</strong>
              <p>Local time: {flightData.bwiLocalTime}</p>
              <p>{flightData.departureWeather}</p>
            </div>
            <div className="feature-card">
              <strong>Los Angeles, CA (LAX)</strong>
              <p>Local time: {flightData.laxLocalTime}</p>
              <p>{flightData.destinationWeather}</p>
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
            <p>We are cruising at {flightData.altitude.toLocaleString()} feet with smooth conditions ahead and expect to arrive a few minutes early.</p>
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
