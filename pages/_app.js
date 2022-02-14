import { Layout } from '../components/Layout/Layout'
import '../styles/Global.js'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>


  )
}

export default MyApp
