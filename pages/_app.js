import Layouts from '../components/Layouts'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
