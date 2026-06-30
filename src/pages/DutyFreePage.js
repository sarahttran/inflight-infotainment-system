window.DutyFreePage = function DutyFreePage({ setPage, addInvoiceItem }) {
  const [cart, setCart] = React.useState([]);
  const [purchased, setPurchased] = React.useState(false);

  const catalog = [
    { name: "Perfume - Chanel No. 5", price: 80.00, image: "./assets/chanel.avif" },
    { name: "Travel Set - Blanket & Eye Mask", price: 30.00, image: "./assets/travel-set.jpg" },
    { name: "Sunglasses", price: 25.00, image: "./assets/sunglasses.webp" },
    { name: "Skincare Set", price: 30.00, image: "./assets/skincare.webp" },
  ];

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function confirmPurchase() {
    if (cart.length === 0) {
      alert("Please add at least one item.");
      return;
    }

    cart.forEach(item => addInvoiceItem("Duty-Free", item.name, item.price));
    setPurchased(true);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (purchased) {
    return (
      <PageShell title="Duty-Free Shopping" setPage={setPage} backTo="food">
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Purchase Complete!</h2>
          <p>Your items have been added to your invoice.</p>

          <button className="primary-button" onClick={() => setPage("food")}>
            Back to Food & Services
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Duty-Free Shopping" setPage={setPage} backTo="food">
      <h2>Catalog</h2>

      <section className="item-menu-grid">
        {catalog.map(function(item, index) {
          return (
            <div key={index} className="item-card">
              <img
                className="item-image"
                src={item.image}
                alt={item.name}
              />

              <h3 className="item-title">{item.name}</h3>

              <p className="item-price">${item.price.toFixed(2)}</p>

              <button className="primary-button" onClick={() => addToCart(item)}>
                + Add
              </button>
            </div>
          );
        })}
      </section>

      <div style={{ marginTop: "20px" }}>
        <h2>Cart</h2>

        {cart.length === 0 && <p>No items in cart.</p>}

        {cart.map(function(item, index) {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 0"
              }}
            >
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          );
        })}

        {cart.length > 0 && (
          <div>
            <hr />
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
            <button className="primary-button" onClick={confirmPurchase}>
              Confirm Purchase
            </button>
          </div>
        )}
      </div>
    </PageShell>
  );
};