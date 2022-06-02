import Link from 'next/link'

const Navbar = () => (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">David Cayo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
        <Link href="/github">
            <a className="nav-link">Github</a>
        </Link>
        </li>

        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About me</a>
          </Link>
        </li>

      </ul>
    </div>
  </div>
  </nav>
  </>
)
export default Navbar;
