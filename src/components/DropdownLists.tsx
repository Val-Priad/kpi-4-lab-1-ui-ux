function DropdownLists() {
  return (
    <div className="card">
      <h3 className="card-title">8. Dropdown lists</h3>
      <nav>
        <ol className="nav-list">
          <li className="menu-item">
            <a href="#0">Useful info</a>
            <ol className="sub-menu">
              <li className="menu-item">
                <a href="#">FAQs</a>
              </li>
              <li className="menu-item">
                <a href="#">About us</a>
              </li>
              <li className="menu-item">
                <a href="#">Contact section</a>
              </li>
            </ol>
          </li>
          <li className="menu-item">
            <a href="#0">Electronics</a>
            <ol className="sub-menu">
              <li className="menu-item">
                <a href="#">Smartphones</a>
              </li>
              <li className="menu-item">
                <a href="#">Smartwatches</a>
              </li>
              <li className="menu-item">
                <a href="#">Laptops</a>
              </li>
            </ol>
          </li>
        </ol>
      </nav>
      <p className="card-text">
        Dropdown lists hide related options under a single trigger, keeping
        navigation clean and compact. Users click or tap a parent item to
        reveal additional links or settings, reducing clutter while still
        offering quick access to deeper sections or categories.
      </p>
    </div>
  );
}

export default DropdownLists;
