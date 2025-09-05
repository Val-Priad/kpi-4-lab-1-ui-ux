function Checkboxes() {
  return (
    <div className="card">
      <h3 className="card-title">2. Checkboxes</h3>
      <div className="demonstration-group light-bg">
        <div className="checkbox-item">
          <input type="checkbox" id="cb1" name="features" />
          <label htmlFor="cb1">Autostart on boot</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="cb2" name="features" defaultChecked />
          <label htmlFor="cb2">Enable notifications</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="cb3" name="features" />
          <label htmlFor="cb3">Subscribe to newsletter</label>
        </div>
      </div>
      <p className="card-text">
        Checkboxes let users select one, many, or no options from a list. Each
        selection is independent, making them ideal htmlFor features,
        preferences, or settings that aren’t mutually exclusive.
      </p>
    </div>
  );
}

export default Checkboxes;
