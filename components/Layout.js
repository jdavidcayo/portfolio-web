import  Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
  <Navbar />
  <div className="container">
    {children}
  </div>
  </>
);

export default Layout;
