import '../styles/globals.css'
import { UniformContext } from "@uniformdev/context-react";
import { createUniformContext } from '../functions/uniformContext'
const clientContext = createUniformContext();

const options = {
  emitAll: true,
  disableEventSignals: true,
}

const pzEmitter = PersonalizationEvent => {
  console.groupCollapsed("%c Uniform Personalization Data", 'font-weight: bold; font-size: 12px; background: #32CD32; color: #000; padding: 7px; ')
  console.log("Received a Personalization Event", PersonalizationEvent);
  console.groupEnd()
}


function MyApp({ Component, pageProps, serverUniformContext}) {  
  clientContext.events.on('personalizationResult', pzEmitter)
  return (
    <UniformContext context={serverUniformContext ?? clientContext} >
      <Component {...pageProps} />
    </UniformContext>
  )
}

export default MyApp
