import Link from 'next/link';
import Layout from '../components/Layout';

const custom404 = () => {
    return (
        <div>
          <Layout>
          <div className="container my-4" >
            Pagina no encontrada, Por favor regrese a
              <Link href="/">
                <a> Pagina de inicio</a>
              </Link>
          </div>
          </Layout>
        </div>
    )
}

export default custom404;
