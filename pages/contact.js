import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
          <div className="row mt-4">
            <div className="container col-md-6">

              <div className="card card-body shadow">
                <div className="container d-flex justify-content-center">
                {/*Logo correo*/}
                  <div className="">
                    <img src="./img/mail.png" alt="Mail Image" className="logos"/>
                  </div>
                  <div className="px-2 bordered m-2 shadow">
                    <h5>jdavidcayo@gmail.com</h5>
                    <p>Consulte por correo y organizamos una reunion por video-conferencia</p>
                  </div>

                </div>
              </div>

              <div className="card card-body my-2 shadow">
                <div className="container d-flex justify-content-center">
                {/*Logo correo*/}
                  <a href="https://wa.me/+5492615749489">
                    <img src="./img/ws.png" alt="Discord Image" className="logos"/>
                  </a>
                  <div className="px-2 bordered m-2 shadow">
                    <h5><a href="https://wa.me/+5492615749489">David Cayo</a></h5>
                    <p>Mas personal, se respondera en horario de comercio.</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </Layout>
    )
}

export default Contact
