import "./Nav.scss";

function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <p>Media Scheduling App</p>
        </div>

        <div>
          <button className="help-btn">Help</button>

          <span>DB</span>
          <p>Delulu Baby</p>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
