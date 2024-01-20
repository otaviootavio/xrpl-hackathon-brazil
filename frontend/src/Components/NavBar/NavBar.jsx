import "./NavBar.css"

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="/Home">Coffee Breaking News</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/News">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/LogIn">LogIn</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;