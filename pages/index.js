import Layout from '../components/Layout'

const app = () => (
  <Layout>
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <img src="./img/avatar.jpeg" alt="DavidC" className="avatar"/>
            </div>
            <div className="col-md-8 text-light">
              <h1>David Cayo</h1>
              <h5>Programador web freelance</h5>
              <p>Bienvenidos a mi portfolio, soy un desarrolador con habilidades en frontend/backend, sigo adquiriendo conocimiento y mi fuerte es la libreria React.js</p>
              <a href="/contact">Contactame</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default app;
