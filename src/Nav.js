function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <a className="navbar-brand" href="#">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
