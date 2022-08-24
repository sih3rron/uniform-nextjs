import '../styles/globals.css'
import { UniformContext } from "@uniformdev/context-react";
import { createUniformContext } from '../functions/uniformContext'
const clientContext = createUniformContext();
import Layout from '../components/Layout';

const options = {
  emitAll: false,
  disableEventSignals: true,
}

function MyApp({ Component, pageProps, serverUniformContext}) {  
  return (
    <UniformContext context={serverUniformContext ?? clientContext} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UniformContext>
  )
}

export default MyApp
