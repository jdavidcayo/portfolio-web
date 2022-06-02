import Layout from '../components/Layout'
import {skills} from '../profile'

const app = () => (
  <Layout>

    {/* Seccion I */}
    <div className="row my-2">
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

    {/* Seccion II */}
    <div className="row my-2">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
              <h3>Habilidades</h3>
              {
                skills.map(({title, porcent}, i) => (
                  <div className="mb-2" key={i}>
                  <h5 >{title}</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width:`${porcent}%`}}></div>
                  </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h3>Experiencia</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default app;
