function Tooltips() {
  return (
    <div className="card">
      <h3 className="card-title">8. Tooltip</h3>
      <div className="tooltips">
        <div
          className="img-container"
          data-tooltip="Pepperoni pizza: Classic Italian pizza topped with
              spicy pepperoni, melted cheese, and tangy tomato sauce."
        >
          <img src="peperoni.jpg" alt="peperoni pizza" />
        </div>
        <div
          className="img-container"
          data-tooltip="Margherita pizza: Traditional pizza with fresh mozzarella, ripe tomatoes, fragrant basil, and a crispy golden crust."
        >
          <img src="margarita.jpg" alt="margarita pizza" />
        </div>
      </div>
      <p className="card-text">
        Tooltips provide additional information or guidance for form fields
        without cluttering the interface. Hovering over the element displays
        context-sensitive hints to improve usability and reduce errors.
      </p>
    </div>
  );
}

export default Tooltips;
