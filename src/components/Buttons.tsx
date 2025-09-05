function Buttons() {
  return (
    <div className="card">
      <h3 className="card-title">5. Buttons</h3>
      <div className="demonstration-group light-bg">
        <div className="button-item">
          <button className="btn btn--primary" type="button">
            Primary Action
          </button>
        </div>
        <div className="button-item secondary">
          <button className="btn btn--secondary" type="submit">
            Secondary Action
          </button>
        </div>
        <div className="button-item">
          <button className="btn btn--disabled" type="button" disabled>
            Disabled
          </button>
        </div>
      </div>
      <p className="card-text">
        Buttons trigger actions like submitting forms, saving settings, or
        navigating. They provide clear, interactive controls to confirm or
        cancel tasks, offering users a direct way to act.
      </p>
    </div>
  );
}

export default Buttons;
