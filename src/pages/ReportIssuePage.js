window.ReportIssuePage = function ReportIssuePage({ setPage }) {
  var issueTypes = ["Food Order Issue", "Payment Issue", "Service Issue", "General Feedback"];
  const [issueType, setIssueType] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit() {
    if (!issueType) { alert("Please select an issue type."); return; }
    if (message.trim() === "") { alert("Please enter a message before submitting."); return; }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <PageShell title="Report Issue / Feedback" setPage={setPage}>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "3rem" }}>✓</p>
          <p>Your report has been submitted. Airline staff has been notified.</p>
          <button className="primary-button" style={{ marginTop: "20px" }} onClick={function() { setPage("food"); }}>
            Back to Food & Services
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Report Issue / Feedback" setPage={setPage}>
      <div className="form-stack">
        <label>Issue Type
          <select value={issueType} onChange={function(e) { setIssueType(e.target.value); }}>
            <option value="">Select an issue type...</option>
            {issueTypes.map(function(type) {
              return <option key={type} value={type}>{type}</option>;
            })}
          </select>
        </label>
        <label>Message
          <textarea placeholder="Describe your issue or feedback..." value={message}
            onChange={function(e) { setMessage(e.target.value); }} rows={5} />
        </label>
        <button className="primary-button" onClick={handleSubmit}>Submit</button>
        <button className="secondary-button" onClick={function() { setPage("food"); }}>Cancel</button>
      </div>
    </PageShell>
  );
};