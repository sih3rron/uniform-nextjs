import Hero from '../components/Hero';
import { CanvasClient } from "@uniformdev/canvas";


export async function getStaticProps(){

/*   const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });

  const {composition} = await client.getCompositionById({
    compositionId: "bcfd7041-1ffe-43db-83e5-8707aede4794",
  }) */

  

  const query = `{
      landingPage(id: "3Xs5XbkAN9x2qeS5L4wtoS") {
        heading
        subHeading
        mainCopy
        primaryCta
        heroImage {
          fileName
          height
          width
        }
      }
    }`;

  const options = {
      method: "POST",
      headers: {
          Authorization: "Bearer CR_wFYlEEVJI0HS1EbOPKp_ZXio_GvuWG-wj5k8CP4U",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ query })
  };
    
  const res = await fetch("https://graphql.contentful.com/content/v1/spaces/mj6gvyaqcrzn", options);
  const { data } = await res.json();  

    if (!data) {
      return {
        notFound: true,
      }
    }

  return { 
    props: {
      data
    },
  }
};

export default function landingPage(props) {

    return (
      <>
        <Hero 
          data={props.data}
          composition={props.composition}
        />
      </>
    )
  }