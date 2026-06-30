window.DutyFreePage = function DutyFreePage({ setPage, addInvoiceItem }) {
  const [cart, setCart] = React.useState([]);
  const [screen, setScreen] = React.useState("catalog"); // catalog | payment | purchased
  const [cardName, setCardName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpiry, setCardExpiry] = React.useState("");
  const [cardCVV, setCardCVV] = React.useState("");

  const catalog = [
    { name: "Perfume - Chanel No. 5", price: 45.00 },
    { name: "Whiskey - Johnnie Walker", price: 38.00 },
    { name: "Chocolate Box", price: 12.00 },
    { name: "Sunglasses", price: 25.00 },
    { name: "Skincare Set", price: 30.00 },
  ];

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function goToPayment() {
    if (cart.length === 0) {
      alert("Please add at least one item.");
      return;
    }
    setScreen("payment");
  }

  function confirmPurchase() {
    if (!cardName || cardNumber.length < 4 || !cardExpiry || !cardCVV) {
      alert("Please fill in all payment fields.");
      return;
    }
    cart.forEach(item => addInvoiceItem("Duty-Free", item.name, item.price));
    setScreen("purchased");
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (screen === "purchased") {
    return (
      <PageShell title="Duty-Free Shopping" setPage={setPage}>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Purchase Complete!</h2>
          <p>Paid by credit card ending in {cardNumber.slice(-4)}.</p>
          <p>Your items have been added to your invoice.</p>
          <button className="primary-button" onClick={() => setPage("food")}>Back to Food & Services</button>
        </div>
      </PageShell>
    );
  }

  if (screen === "payment") {
    return (
      <PageShell title="Payment" setPage={setPage}>
        <h2>Order Summary</h2>
        {cart.map(function(item, index) {
          return (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          );
        })}
        <hr />
        <p><strong>Total: ${total.toFixed(2)}</strong></p>

        <div className="form-stack" style={{ marginTop: "20px" }}>
          <label>Name on Card
            <input type="text" placeholder="Jane Smith" value={cardName}
              onChange={(e) => setCardName(e.target.value)} />
          </label>
          <label>Card Number
            <input type="text" placeholder="**** **** **** 1234" maxLength={19} value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)} />
          </label>
          <label>Expiry
            <input type="text" placeholder="MM/YY" maxLength={5} value={cardExpiry}
              onChange={(e) => setCardExpiry(e.target.value)} />
          </label>
          <label>CVV
            <input type="text" placeholder="CVV" maxLength={3} value={cardCVV}
              onChange={(e) => setCardCVV(e.target.value)} />
          </label>
          <button className="primary-button" onClick={confirmPurchase}>Confirm and Pay ${total.toFixed(2)}</button>
          <button className="secondary-button" onClick={() => setScreen("catalog")}>Cancel</button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Duty-Free Shopping" setPage={setPage}>
      <h2>Catalog</h2>
      <section className="home-grid">
        {catalog.map(function(item, index) {
          return (
            <div key={index} className="feature-card">
              <p><strong>{item.name}</strong></p>
              <p>${item.price.toFixed(2)}</p>
              <button className="primary-button" onClick={() => addToCart(item)}>+ Add</button>
            </div>
          );
        })}
      </section>

      <div style={{ marginTop: "20px" }}>
        <h2>Cart</h2>
        {cart.length === 0 && <p>No items in cart.</p>}
        {cart.map(function(item, index) {
          return (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          );
        })}
        {cart.length > 0 && (
          <div>
            <hr />
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
            <button className="primary-button" onClick={goToPayment}>Proceed to Payment</button>
          </div>
        )}
      </div>
    </PageShell>
  );
};