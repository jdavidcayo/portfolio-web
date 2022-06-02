import Link from 'next/link'

const Navbar = () => (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeInDown">
  <div className="container">
    <Link href="/">
      <a className="navbar-brand">David Cayo</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
        <Link href="/contact">
            <a className="nav-link">Contactame</a>
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
