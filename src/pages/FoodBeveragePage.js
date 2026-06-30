window.FoodBeveragePage = function FoodBeveragePage({ setPage, addInvoiceItem }) {
  const [order, setOrder] = React.useState([]);

  const menuItems = [
    { name: "Grilled Chicken Wrap", price: 8.50 },
    { name: "Pasta Primavera", price: 7.00 },
    { name: "Caesar Salad", price: 6.50 },
    { name: "Orange Juice", price: 3.00 },
    { name: "Water", price: 1.50 },
    { name: "Coffee", price: 2.50 },
  ];

  function addToOrder(item) {
    setOrder([...order, item]);
  }

  function removeFromOrder(index) {
    setOrder(order.filter((_, i) => i !== index));
  }

  function placeOrder() {
    if (order.length === 0) {
      alert("Please add at least one item.");
      return;
    }
    order.forEach(item => addInvoiceItem("Food", item.name, item.price));
    alert("Order placed! A flight attendant will bring your items.");
    setPage("food");
  }

  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <PageShell title="Food & Beverage" setPage={setPage} backTo="food">
      <h2>Menu</h2>
      <section className="home-grid">
        {menuItems.map(function(item, index) {
          return (
            <div key={index} className="feature-card">
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
            <button className="primary-button" onClick={placeOrder}>Place Order</button>
          </div>
        )}
      </div>
    </PageShell>
  );
};