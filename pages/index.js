import Layout from '../components/Layout'
import { skills, experiences, proyectos } from '../profile'

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
    <div className="row mt-2 mb-2">
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
            <ul>
            {
              experiences.map( ({title, ageIn, ageOut, details}, i) => (
                <li key={i}>
                <h4>{ title }</h4>
                <h5>{ ageIn } - { ageOut }</h5>
                <p>{ details }</p>
                </li>
              ))
            }
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Seccion portfolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">

            <div className="col-md-12">
              <h2 className="text-center text-light">Portfolio</h2>
            </div>

            {/*Card de cada proyecto*/}
            {
            proyectos.map( ({title, description, img}, i) => (
              <div className="col-md-4 my-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`./img/${img}`} alt="imagen" className="img img-fluid"/>
                  </div>
                  <div className="card-body text-center">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href="#" className="btn btn-outline-secondary btn-sm">Github</a>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>



  </Layout>
)

export default app;
