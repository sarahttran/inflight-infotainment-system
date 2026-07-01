window.FoodBeveragePage = function FoodBeveragePage({ setPage, addInvoiceItem }) {
  const [order, setOrder] = React.useState([]);
  const [screen, setScreen] = React.useState("menu"); // menu | payment | tracking
  const [cardName, setCardName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpiry, setCardExpiry] = React.useState("");
  const [cardCVV, setCardCVV] = React.useState("");
  const [statusIndex, setStatusIndex] = React.useState(0);

  const statuses = ["Received", "Preparing", "On the way", "Delivered"];

  const menuItems = [
    { name: "Grilled Chicken Wrap", price: 8.50, image: "./assets/wrap.jpg" },
    { name: "Pasta Primavera", price: 7.00, image: "./assets/pasta.jpeg" },
    { name: "Caesar Salad", price: 6.50, image: "./assets/caesar-salad.avif" },
    { name: "Orange Juice", price: 3.00, image: "./assets/orange-juice.png" },
    { name: "Water", price: 1.50, image: "./assets/water.jpg" },
    { name: "Coffee", price: 2.50, image: "./assets/coffee.webp" },
  ];

  function addToOrder(item) {
    setOrder([...order, item]);
  }

  function removeFromOrder(index) {
    setOrder(order.filter((_, i) => i !== index));
  }

  function goToPayment() {
    if (order.length === 0) {
      alert("Please add at least one item.");
      return;
    }
    setScreen("payment");
  }

  function confirmAndPay() {
    if (!cardName || cardNumber.length < 4 || !cardExpiry || !cardCVV) {
      alert("Please fill in all payment fields.");
      return;
    }
    order.forEach(item => addInvoiceItem("Food", item.name, item.price));
    setScreen("tracking");
    setStatusIndex(0);
  }

  // auto-advance order status every 1-2 min (using 90 sec intervals)
  React.useEffect(() => {
    if (screen !== "tracking") return;
    if (statusIndex >= statuses.length - 1) return;

    const timer = setTimeout(() => {
      setStatusIndex(prev => prev + 1);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [screen, statusIndex]);

  const total = order.reduce((sum, item) => sum + item.price, 0);

  if (screen === "tracking") {
    return (
      <PageShell title="Order Status" setPage={setPage}>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2>Status: {statuses[statusIndex]}</h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
            {statuses.map(function(s, i) {
              return (
                <div key={s} style={{
                  padding: "10px 15px",
                  borderRadius: "8px",
                  backgroundColor: i <= statusIndex ? "#4caf50" : "#eee",
                  color: i <= statusIndex ? "white" : "#666",
                  fontWeight: i === statusIndex ? "bold" : "normal"
                }}>
                  {s}
                </div>
              );
            })}
          </div>

          <p>Paid by credit card ending in {cardNumber.slice(-4)}.</p>
          <p style={{ color: "#666" }}>Total: ${total.toFixed(2)}</p>

          <button className="primary-button" style={{ marginTop: "20px" }} onClick={() => setPage("food")}>
            Back to Food & Services
          </button>
        </div>
      </PageShell>
    );
  }

  if (screen === "payment") {
    return (
      <PageShell title="Payment" setPage={setPage}>
        <h2>Order Summary</h2>
        {order.map(function(item, index) {
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
          <button className="primary-button" onClick={confirmAndPay}>Confirm and Pay ${total.toFixed(2)}</button>
          <button className="secondary-button" onClick={() => setScreen("menu")}>Cancel</button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Food & Beverage" setPage={setPage} backTo="home">
      <h2>Menu</h2>
      <section className="item-menu-grid">
        {menuItems.map(function(item, index) {
          return (
            <div key={index} className="item-card">
              <img 
                className="item-image"
                src={item.image}
                alt={item.name}
              />

              <p><strong>{item.name}</strong></p>
              <p>${item.price.toFixed(2)}</p>

              <button className="primary-button" onClick={() => addToOrder(item)}>
                + Add
              </button>
            </div>
          );
        })}
      </section>

      <div style={{ marginTop: "20px" }}>
        <h2>Order Summary</h2>
        {order.length === 0 && <p>No items added yet.</p>}
        {order.map(function(item, index) {
          return (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
              <span>{item.name}</span>
              <span>
                ${item.price.toFixed(2)}
                <button onClick={() => removeFromOrder(index)} style={{ marginLeft: "10px", color: "red" }}>✕</button>
              </span>
            </div>
          );
        })}
        {order.length > 0 && (
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