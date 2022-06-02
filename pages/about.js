import Layout from '../components/Layout';
import Link from 'next/link'

const About = () => {
    return (
      <Layout>
        <div className="container py-2">
          <div className="row">
            <div className="col-md-6 container">
              <div className="card card-body text-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="container py-2">
                  <img src="./img/avatar.jpeg" alt="about" className="img-about border rounded"/>
                </div>
                <div className="d-flex ">
                  <p className="border rounded shadow-lg m-1 p-1">Frontend</p>
                  <p className="border rounded shadow-lg m-1 p-1">Backend</p>
                </div>
                <h4>Acerca de mi</h4>
                <p>Vivo en Mendoza, Argentina. Estudiante en la Universidad Tecnologica Nacional, curso la Tecnicatura Sup. en Programacion.
                  Si bien trabajo freelance, me gusta trabajar en equipo, colaboro y apoyo a mis compañeros para lograr buen rendimiento y terminar trabajos en tiempo y forma.
                  Sigo adquiriendo conocimiento de forma constante por medio de la Universidad y de forma autodidacta.
                  En mis ratos libres soy un amante apasionado del buen futbol.
                </p>
                <div className="container">
                  <Link href="/contact">
                    <a className="btn btn-outline-primary btn">Contactame</a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    )
}

export default About;
