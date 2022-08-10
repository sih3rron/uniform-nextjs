//Dependents
import { CanvasClient } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { EnhancerBuilder, enhance } from '@uniformdev/canvas';
import { 
    createContentfulEnhancer,
    ContentfulClientList,
    CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from '@uniformdev/canvas-contentful';
import { createClient } from 'contentful';

//components
import Button from "../components/Button";
import MockHero from "../components/MockHero";


const resolveRenderer = (component) => {
        if(component.type === "hero") return MockHero;
        if(component.type === "button") return Button;
    return null;
}

const splash = ({composition}) => {
    return ( 
        <>                
            <Composition data={composition} resolveRenderer={resolveRenderer}>
                    <Slot name="content" />
            </Composition>

        </>
     );
}
 
export default splash;

export async function getStaticProps(context) {

    const uniformClient = new CanvasClient({
        apiKey: process.env.UNIFORM_API_KEY,
        projectId: process.env.UNIFORM_PROJECT_ID,
      });
    
    const {composition} = await uniformClient.getCompositionById({
    compositionId: "2aff5e56-2771-4fc2-9aca-5a10ad244dd6",
    })

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENV,
        accessToken: process.env.CONTENTFUL_TOKEN,
    });
    
    const clientList = new ContentfulClientList({ client });
    const contentfulEnhancer = createContentfulEnhancer({ client: clientList })
    
    await enhance({
        composition,
        enhancers: new EnhancerBuilder().parameterType(
            CANVAS_CONTENTFUL_PARAMETER_TYPES, 
            contentfulEnhancer
    ),
        context: {},
    });

    return {
        props: {
            composition,
        }
    };
}