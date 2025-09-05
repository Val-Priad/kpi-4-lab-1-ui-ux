function TextInputs() {
  return (
    <div className="card">
      <h3 className="card-title">3. Text Inputs</h3>
      <div className="demonstration-group light-bg">
        <div className="text-input-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
        </div>

        <div className="text-input-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="text-input-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
      </div>
      <p className="card-text">
        Text inputs collect freeform user data such as names, emails, or
        passwords. They’re flexible fields htmlFor single-line text and enable
        quick, direct user input in forms.
      </p>
    </div>
  );
}

export default TextInputs;
