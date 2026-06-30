window.ViewInvoicePage = function ViewInvoicePage({ setPage, invoiceItems }) {
  const total = invoiceItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <PageShell title="My Invoice" setPage={setPage} backTo="food">
      {invoiceItems.length === 0 ? (
        <p>No purchases made yet.</p>
      ) : (
        <div>
          {invoiceItems.map(function(item, index) {
            return (
              <div key={index} style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>
                    <strong>{item.category}</strong> — {item.name}
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <p style={{ color: "#666", fontSize: "0.85rem", margin: "2px 0 0 0" }}>
                  ✓ Paid by {item.paymentMethod || "Credit Card"}
                </p>
              </div>
            );
          })}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Total Charged</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </PageShell>
  );
};