import Layout from '../components/Layout'
import Topbar from '../components/Topbar'
import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
