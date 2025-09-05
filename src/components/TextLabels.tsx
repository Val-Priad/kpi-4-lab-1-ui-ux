function TextLabels() {
  return (
    <div className="card">
      <h3 className="card-title">6. Text Labels</h3>
      <div className="demonstration-group light-bg">
        <div className="label-element-presentation">
          <label htmlFor="cb1">
            Autostart on boot
            <span>(Press to see change in section 2. Checkboxes)</span>
          </label>
        </div>
        <div className="label-element-presentation">
          <label htmlFor="radio3">
            Inherit system mode
            <span>(Press to see change in section 1. Radio Buttons)</span>
          </label>
        </div>
        <div className="label-element-presentation">
          <label htmlFor="email">
            Email
            <span>(Press to focus email field in section 3. Text Inputs)</span>
          </label>
        </div>
      </div>
      <p className="card-text">
        Text labels describe inputs or sections, giving users clear context
        about what data to provide or what a control means. Labels improve
        usability and accessibility by linking descriptions to form elements.
      </p>
    </div>
  );
}

export default TextLabels;
