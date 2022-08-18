import { CanvasClient } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import Card from "../components/CardComponents/Card";
import CardTitle from "../components/CardComponents/CardTitle";
import CardButton from "../components/CardComponents/CardButton";
import CardPrice from "../components/CardComponents/CardPrice";
import CardImage from '../components/CardComponents/CardImage';

export async function getStaticProps(){

    const client = new CanvasClient({
        apiKey: process.env.UNIFORM_API_KEY,
        projectId: process.env.UNIFORM_PROJECT_ID,
      });
    
    const {composition} = await client.getCompositionById({
      compositionId: "827d976d-56d7-442b-85e9-8f558047ca72",
    })


    return { 
        props: {
          composition,
        },
      }
};

const resolveRenderer = (component) => {
  if(component.type === "card") return Card;
  if(component.type === "cardtitle") return CardTitle;
  if(component.type === "cardimage") return CardImage;
  if(component.type === "cardprice") return CardPrice;
  if(component.type === "cardbutton") return CardButton;
return null;
}

const ProductListingsPage = (props) => {
    const {composition} = props;
    return ( 
      <Composition data={composition} resolveRenderer={resolveRenderer}>
        {/*  {({sort, sortDirection}) => <Card sort={sort} sortDirection={sortDirection} />} */}
        <Slot name="products"/>
      </Composition>
     );
}
 
export default ProductListingsPage;