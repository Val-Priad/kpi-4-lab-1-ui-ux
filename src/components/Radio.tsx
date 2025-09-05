function Radio() {
  return (
    <div className="card">
      <h3 className="card-title">1. Radio Buttons</h3>
      <div className="demonstration-group light-bg">
        <div className="radio-item">
          <input type="radio" id="radio1" name="radio" />
          <label htmlFor="radio1">Light mode</label>
        </div>
        <div className="radio-item">
          <input type="radio" id="radio2" name="radio" defaultChecked />
          <label htmlFor="radio2">Dark mode </label>
        </div>
        <div className="radio-item">
          <input type="radio" id="radio3" name="radio" />
          <label htmlFor="radio3">Inherit system mode</label>
        </div>
      </div>
      <p className="card-text">
        Radio buttons are used in forms when a user must pick one option from a
        small, fixed set. They’re ideal htmlFor mutually exclusive choices like
        gender, payment type, or yes/no. Each click deselects the previous
        choice, preventing multiple selections and simplifying decision-making
        htmlFor clear, quick input.
      </p>
    </div>
  );
}

export default Radio;
