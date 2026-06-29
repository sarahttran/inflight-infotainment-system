window.PhoneCallPage = function PhoneCallPage({ setPage, addInvoiceItem }) {
  const CALL_RATE = 2.0;
  const [screen, setScreen] = React.useState("dial");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpiry, setCardExpiry] = React.useState("");
  const [cardCVV, setCardCVV] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);

  function handleKeyPress(key) {
    if (phoneNumber.length < 10) setPhoneNumber(function(prev) { return prev + key; });
  }

  function handleBackspace() {
    setPhoneNumber(function(prev) { return prev.slice(0, -1); });
  }

  function formatPhoneDisplay(num) {
    if (num.length === 0) return "";
    if (num.length <= 3) return "+1 (" + num;
    if (num.length <= 6) return "+1 (" + num.slice(0,3) + ") " + num.slice(3);
    return "+1 (" + num.slice(0,3) + ") " + num.slice(3,6) + "-" + num.slice(6,10);
  }

  function goToPayment() {
    if (phoneNumber.length < 10) { alert("Please enter a valid 10-digit phone number."); return; }
    setScreen("payment");
  }

  function confirmAndCall() {
    if (!cardName || cardNumber.length < 4 || !cardExpiry || !cardCVV) {
      alert("Please fill in all payment fields."); return;
    }
    setScreen("active");
    setDuration(0);
    var id = setInterval(function() { setDuration(function(prev) { return prev + 1; }); }, 1000);
    setIntervalId(id);
  }

  function endCall() {
    clearInterval(intervalId);
    var totalCost = parseFloat(((duration / 60) * CALL_RATE).toFixed(2));
    addInvoiceItem("Phone", "Call to " + formatPhoneDisplay(phoneNumber), totalCost);
    setScreen("ended");
  }

  function formatDuration(secs) {
    var m = String(Math.floor(secs / 60)).padStart(2, "0");
    var s = String(secs % 60).padStart(2, "0");
    return m + ":" + s;
  }

  if (screen === "dial") {
    var keys = ["1","2","3","4","5","6","7","8","9","*","0","#"];
    return (
      <PageShell title="In-Flight Phone Call" setPage={setPage}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "1.4rem", fontWeight: "bold", minHeight: "2rem" }}>
            {formatPhoneDisplay(phoneNumber) || "Enter destination number"}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", maxWidth: "300px", margin: "0 auto" }}>
          {keys.map(function(key) {
            return (
              <button key={key} className="feature-card" onClick={function() { handleKeyPress(key); }}
                style={{ padding: "20px", fontSize: "1.2rem", cursor: "pointer" }}>
                {key}
              </button>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="secondary-button" onClick={handleBackspace}>⌫ Backspace</button>
          <p style={{ margin: "10px 0", color: "#666" }}>Rate: ${CALL_RATE.toFixed(2)}/min · Credit card required</p>
          <button className="primary-button" onClick={goToPayment}>Call Now</button>
        </div>
      </PageShell>
    );
  }

  if (screen === "payment") {
    return (
      <PageShell title="Payment" setPage={setPage}>
        <p>Calling: <strong>{formatPhoneDisplay(phoneNumber)}</strong></p>
        <p>Rate: <strong>${CALL_RATE.toFixed(2)}/min</strong></p>
        <div className="form-stack">
          <label>Name on Card
            <input type="text" placeholder="Jane Smith" value={cardName}
              onChange={function(e) { setCardName(e.target.value); }} />
          </label>
          <label>Card Number
            <input type="text" placeholder="**** **** **** 1234" maxLength={19} value={cardNumber}
              onChange={function(e) { setCardNumber(e.target.value); }} />
          </label>
          <label>Expiry
            <input type="text" placeholder="MM/YY" maxLength={5} value={cardExpiry}
              onChange={function(e) { setCardExpiry(e.target.value); }} />
          </label>
          <label>CVV
            <input type="text" placeholder="CVV" maxLength={3} value={cardCVV}
              onChange={function(e) { setCardCVV(e.target.value); }} />
          </label>
          <button className="primary-button" onClick={confirmAndCall}>Confirm & Call</button>
          <button className="secondary-button" onClick={function() { setScreen("dial"); }}>Cancel</button>
        </div>
      </PageShell>
    );
  }

  if (screen === "active") {
    var liveCost = ((duration / 60) * CALL_RATE).toFixed(2);
    return (
      <PageShell title="On Call" setPage={setPage}>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "1.2rem" }}>{formatPhoneDisplay(phoneNumber)}</p>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{formatDuration(duration)}</p>
          <p style={{ color: "#666" }}>${liveCost} charged</p>
          <button className="primary-button" style={{ backgroundColor: "red", marginTop: "30px" }} onClick={endCall}>
            End Call
          </button>
        </div>
      </PageShell>
    );
  }

  if (screen === "ended") {
    var total = ((duration / 60) * CALL_RATE).toFixed(2);
    return (
      <PageShell title="Call Ended" setPage={setPage}>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>To: <strong>{formatPhoneDisplay(phoneNumber)}</strong></p>
          <p>Duration: <strong>{formatDuration(duration)}</strong></p>
          <p>Total: <strong>${total}</strong></p>
          <p style={{ color: "#666", marginTop: "10px" }}>Receipt added to your invoice.</p>
          <button className="primary-button" style={{ marginTop: "20px" }} onClick={function() { setPage("food"); }}>
            Back to Food & Services
          </button>
        </div>
      </PageShell>
    );
  }

  return null;
};