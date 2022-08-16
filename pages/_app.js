import '../styles/globals.css'
import { UniformContext } from "@uniformdev/context-react";
import { createUniformContext } from '../functions/uniformContext'
const clientContext = createUniformContext();

const options = {
  emitAll: false,
  disableEventSignals: true,
}

function MyApp({ Component, pageProps, serverUniformContext}) {  
  return (
    <UniformContext context={serverUniformContext ?? clientContext} >
      <Component {...pageProps} />
    </UniformContext>
  )
}

export default MyApp
